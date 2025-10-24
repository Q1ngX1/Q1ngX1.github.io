import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ContentTable.css"

export default function ContentTable(){
    const location = useLocation();
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState("");

    // 只在笔记页面显示
    const isNotePage = location.pathname.startsWith("/note/");

    useEffect(() => {
        if (!isNotePage) {
            setHeadings([]);
            return;
        }

        // 等待内容渲染后再提取标题
        const timer = setTimeout(() => {
            const mainContent = document.querySelector(".md-doc");
            if (!mainContent) return;

            const headingElements = mainContent.querySelectorAll("h1, h2, h3, h4, h5, h6");
            const headingData = Array.from(headingElements).map((el, index) => {
                // 如果标题没有 id，创建一个
                if (!el.id) {
                    el.id = `heading-${index}`;
                }
                return {
                    id: el.id,
                    text: el.textContent,
                    level: parseInt(el.tagName.substring(1)),
                    children: []
                };
            });
            
            // 构建树状结构
            const tree = [];
            const stack = [];
            
            headingData.forEach(heading => {
                while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
                    stack.pop();
                }
                
                if (stack.length === 0) {
                    tree.push(heading);
                } else {
                    stack[stack.length - 1].children.push(heading);
                }
                
                stack.push(heading);
            });
            
            setHeadings(tree);
        }, 100);

        return () => clearTimeout(timer);
    }, [location.pathname, isNotePage]);

    useEffect(() => {
        if (!isNotePage || headings.length === 0) return;

        // 收集所有标题ID（包括嵌套的）
        const allIds = [];
        const collectIds = (items) => {
            items.forEach(item => {
                allIds.push(item.id);
                if (item.children.length > 0) {
                    collectIds(item.children);
                }
            });
        };
        collectIds(headings);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-80px 0px -80% 0px",
                threshold: 0
            }
        );

        allIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings, isNotePage]);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // 检查一个标题或其子标题是否处于活动状态
    const isActiveOrHasActiveChild = (heading) => {
        if (heading.id === activeId) return true;
        return heading.children.some(child => isActiveOrHasActiveChild(child));
    };

    // 渲染树状结构
    const renderHeadings = (items, level = 1) => {
        return (
            <ul className={level > 1 ? "nested-list" : ""}>
                {items.map((heading, index) => {
                    const isActive = heading.id === activeId;
                    const shouldExpand = isActiveOrHasActiveChild(heading);
                    const hasChildren = heading.children.length > 0;

                    return (
                        <li 
                            key={heading.id} 
                            className={`level-${level} ${isActive ? "active" : ""}`}
                            style={{ 
                                animationDelay: `${index * 0.05}s` // 逐项延迟动画
                            }}
                        >
                            <a href={`#${heading.id}`} onClick={(e) => handleClick(e, heading.id)}>
                                {heading.text}
                            </a>
                            {hasChildren && shouldExpand && renderHeadings(heading.children, level + 1)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    if (!isNotePage || headings.length === 0) {
        return null;
    }

    return (
        <div className="content-table">
            <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>Content Table</h3>
            {renderHeadings(headings)}
        </div>
    );
}