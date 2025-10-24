

export default function About(){
    return (
        <section style={{ padding: '2rem 0' }}>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 600 }}>
                ℹ️ About
            </h1>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                This is my Blog website where I post some of my study notes. This site is based on <a href="https://react.dev" target="_blank" className="link-primary">React</a> + <a href="https://vite.dev" target="_blank" className="link-primary">Vite</a>.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Notes are written in Chinese/English, and were written by <a href="https://obsidian.md" target="_blank" className="link-primary">Obsidian</a>.
            </p>

            <h2 style={{ 
                marginTop: 'var(--space-xl)', 
                marginBottom: '1rem', 
                fontSize: '1.5rem', 
                fontWeight: 600 
            }}>
                Contact me
            </h2>
            <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-sm)' 
            }}>
                <li>
                    <a 
                        href="https://www.instagram.com/q1ngx1?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-primary"
                    >
                        Instagram
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/Q1ngX1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-primary"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/shuhan-zan-Bryan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-primary"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    );
}