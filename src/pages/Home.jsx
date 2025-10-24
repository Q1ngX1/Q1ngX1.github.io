import React from "react";
import { Link } from "react-router-dom";

// 自动导入 /src/lib 下的所有 .html 文件
const noteFiles = import.meta.glob('../lib/*.html', { query: '?raw', eager: true });

export default function Home() {
    // 提取文件名列表,去掉路径和扩展名
    const notes = Object.keys(noteFiles).map(path => {
        const filename = path.split('/').pop(); // 获取文件名
        const title = filename.replace('.html', '').replace(/_/g, ' '); // 美化标题
        return { filename, title };
    });

    return (
        <section style={{ padding: '2rem 0' }}>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 600 }}>
                📚 Study Notes
            </h1>
            <p style={{ marginBottom: '2rem', color: 'var(--muted)' }}>
                Welcome! Click on any note below to start reading.
            </p>
            
            <div style={{ 
                display: 'grid', 
                gap: 'var(--space-md)', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' 
            }}>
                {notes.map(({ filename, title }) => (
                    <Link 
                        key={filename}
                        to={`/note/${filename}`}
                        className="link-btn"
                        style={{ 
                            padding: 'var(--space-md)',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            minHeight: '80px',
                            fontSize: '1.1rem',
                            fontWeight: 500
                        }}
                    >
                        📄 {title}
                    </Link>
                ))}
            </div>
            
            {notes.length === 0 && (
                <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                    No notes available yet.
                </p>
            )}
        </section>
    );
}