#!/usr/bin/env python3
"""
脚本功能：修复 GitHub Pages Jekyll 编译错误
- 在 Markdown 文件开头添加 YAML Front Matter，禁用 Liquid 模板处理
- 确保数学公式中的 {{ 和 }} 不被误认为是 Liquid 语法
用法: python fix_jekyll_liquid_error.py <md_file_path>
"""

import sys
import re


def add_front_matter(content):
    """
    在 Markdown 文件开头添加 YAML Front Matter
    
    YAML Front Matter 格式：
    ---
    layout: page
    permalink: /
    ---
    
    这样可以告诉 Jekyll 处理这个文件，但也确保 Liquid 不会破坏 LaTeX
    
    Args:
        content: Markdown 文件内容
        
    Returns:
        添加 Front Matter 后的内容
    """
    
    # 检查是否已有 Front Matter
    if content.startswith('---'):
        # 已有 Front Matter，检查是否需要添加 jekyll_escape
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if i == 0:
                continue
            if line.startswith('---') and i > 0:
                # 找到 Front Matter 结束位置
                # 检查是否有 jekyll_process 或类似的设置
                front_matter = '\n'.join(lines[1:i])
                if 'layout:' not in front_matter or 'jekyll_process:' not in front_matter:
                    # 需要添加或修改 Front Matter
                    new_front_matter = '\n'.join(lines[1:i])
                    rest = '\n'.join(lines[i+1:])
                    # 添加 jekyll_process: none 防止 Liquid 处理
                    if 'jekyll_process: none' not in new_front_matter:
                        new_front_matter += '\njekyll_process: none'
                    return f"---\n{new_front_matter}\n---\n{rest}"
                break
        return content
    else:
        # 没有 Front Matter，添加一个
        front_matter = """---
layout: page
jekyll_process: none
---

"""
        return front_matter + content


def fix_jekyll_liquid_error(md_file_path):
    """
    修复 GitHub Pages Jekyll Liquid 错误
    
    Args:
        md_file_path: Markdown 文件路径
    """
    try:
        # 读取 Markdown 文件
        with open(md_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 添加 Front Matter
        modified_content = add_front_matter(content)
        
        # 写回文件
        with open(md_file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        
        print(f"✓ 成功修复文件: {md_file_path}")
        print(f"✓ 已添加 YAML Front Matter，禁用 Liquid 处理")
        print(f"✓ LaTeX 公式中的 {{ 和 }} 不会再被误认为是 Liquid 语法")
        
    except FileNotFoundError:
        print(f"✗ 错误：文件未找到 - {md_file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ 错误：{e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python fix_jekyll_liquid_error.py <md_file_path>")
        print("\n示例:")
        print("  python fix_jekyll_liquid_error.py src/assets/notes/linear_algebra_cn.md")
        print("\n说明:")
        print("  - GitHub Pages 使用 Jekyll 处理 Markdown")
        print("  - Jekyll 会尝试解析 Liquid 模板语法（{{ }} 和 {% %}）")
        print("  - 这会与 LaTeX 数学公式冲突")
        print("  - 该脚本添加 YAML Front Matter 来禁用 Liquid 处理")
        print("  - 脚本会直接修改原 Markdown 文件")
        sys.exit(1)
    
    md_file = sys.argv[1]
    fix_jekyll_liquid_error(md_file)
