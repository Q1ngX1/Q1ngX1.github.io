#!/usr/bin/env python3
"""
脚本功能：清理 Markdown 文件中 $$ 块级公式块内的空格和空行
- 去掉开始 $$ 后的空格/空行
- 去掉结束 $$ 前的空格/空行
用法: python clean_formula_whitespace.py <md_file_path>
"""

import sys
import re


def clean_formula_whitespace(file_path):
    """
    清理 Markdown 文件中 $$ 块级公式块内的空格和空行
    
    Args:
        file_path: Markdown 文件路径
    """
    try:
        # 读取文件
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 正则表达式：匹配 $$ ... $$，使用 DOTALL 标志让 . 匹配换行符
        # 匹配开始 $$ 后的空格/空行和结束 $$ 前的空格/空行
        pattern = r'\$\$(\s+)(.*?)(\s+)\$\$'
        
        def replacer(match):
            """替换函数：去掉公式块内首尾的空格和空行"""
            formula_content = match.group(2).strip()
            return f'$${formula_content}$$'
        
        # 执行替换
        modified_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        
        print(f"✓ 已处理文件: {file_path}")
        print("✓ 清理了 $$ 块级公式块内的多余空格和空行")
        
    except FileNotFoundError:
        print(f"✗ 错误：文件未找到 - {file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ 错误：{e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python clean_formula_whitespace.py <md_file_path>")
        print("示例: python clean_formula_whitespace.py notes.md")
        sys.exit(1)
    
    md_file = sys.argv[1]
    clean_formula_whitespace(md_file)
