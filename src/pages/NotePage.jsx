import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

// 动态导入所有笔记文件
const noteFiles = import.meta.glob('../lib/*.html', { query: '?raw', eager: true });
// 动态导入 Markdown 源文件（用于下载）
const mdFiles = import.meta.glob('../assets/notes/*.md', { query: '?url', eager: true });

export default function NotePage(){
    const { filename } = useParams();
    
    // 根据 filename 参数获取对应的 HTML 内容
    const rawHtml = useMemo(() => {
        const path = `../lib/${filename}`;
        const module = noteFiles[path];
        return module?.default || null;
    }, [filename]);

    // 获取对应的 Markdown 源文件 URL
    const mdFileUrl = useMemo(() => {
        // 将 .html 替换为 .md
        const mdFilename = filename?.replace('.html', '.md');
        const mdPath = `../assets/notes/${mdFilename}`;
        return mdFiles[mdPath]?.default || null;
    }, [filename]);

    // 如果文件不存在,重定向到 404
    if (!rawHtml) {
        return <Navigate to="/404" replace />;
    }

    const processed = useMemo(() => {
        let html = rawHtml;
        // 1) 移除可能内置的 KaTeX 样式链接,避免重复/跨域加载干扰
        html = html.replace(/<link[^>]*katex[^>]*>/gi, "");
        // 2) 收集并移除原始 <style>,以便重新作用域化
        const styleBlocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
        let rawCss = "";
        for (const m of styleBlocks) rawCss += (m[1] || "") + "\n";
        html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
        // 3) 提取 body 内的内容(若无 body,则回退为完整 html)
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        const content = bodyMatch ? bodyMatch[1] : html;
        // 4) 将针对全局的选择器作用域化到 .md-doc
        //    把 `html body`、`body` 改为 `.md-doc`,避免污染全站背景/排版
        let scopedCss = rawCss
            .replace(/html\s*body/gi, ".md-doc")
            .replace(/\bbody\b/gi, ".md-doc");
        return { content, css: scopedCss };
    }, [rawHtml]);

    return (
        <>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: 'var(--space-md)',
                alignItems: 'center'
            }}>
                <Link 
                    to="/" 
                    className="link-primary"
                    style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    ← Back to Home
                </Link>
                
                {mdFileUrl && (
                    <a 
                        href={mdFileUrl}
                        download={filename?.replace('.html', '.md')}
                        className="link-primary"
                        style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                    >
                        ↓ Download Markdown
                    </a>
                )}
            </div>
            <section className="md-doc">
                {processed.css && (
                    <style dangerouslySetInnerHTML={{ __html: processed.css }} />
                )}
                <div dangerouslySetInnerHTML={{ __html: processed.content }} />
            </section>
        </>
    );
}