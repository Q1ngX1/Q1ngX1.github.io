#!/usr/bin/env python3
"""
脚本功能：在 Markdown 文件中所有 $$ 数学公式块前加上空行
用法: python add_space_before_formulas.py <md_file_path>
"""

import sys
import re


def add_space_before_formulas(file_path):
    """
    在 Markdown 文件中的 $$ 数学公式块前加上空行
    
    Args:
        file_path: Markdown 文件路径
    """
    try:
        # 读取文件
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 正则表达式：匹配非空行后的 $$（行开头）
        # 使用正向后查，确保 $$ 前面有非空字符
        pattern = r'([^\n])\n(\$\$)'
        
        # 替换：在 $$ 前添加空行
        modified_content = re.sub(pattern, r'\1\n\n$$', content)
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        
        print(f"✓ 已处理文件: {file_path}")
        print("✓ 在所有 $$ 数学公式块前添加了空行")
        
    except FileNotFoundError:
        print(f"✗ 错误：文件未找到 - {file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ 错误：{e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python add_space_before_formulas.py <md_file_path>")
        print("示例: python add_space_before_formulas.py notes.md")
        sys.exit(1)
    
    md_file = sys.argv[1]
    add_space_before_formulas(md_file)
