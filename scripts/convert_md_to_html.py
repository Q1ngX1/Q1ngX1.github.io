#!/usr/bin/env python3
"""
脚本功能：修改 Markdown 文件中的图片路径
- 将 Obsidian 格式的 ![[...]] 转换为标准 Markdown 格式 ![...](...) 
- 将相对路径转换为相对于项目的统一路径 /src/assets/attachements/
用法: python convert_md_to_html.py <md_file_path>
"""

import sys
import re


def extract_filename_from_path(obsidian_path):
    """
    从 Obsidian 路径中提取文件名
    例如: ../../../../../../attachments/IMG_5B5A364358C4-1.jpeg -> IMG_5B5A364358C4-1.jpeg
    """
    parts = obsidian_path.split('/')
    return parts[-1]


def convert_image_paths(content):
    """
    转换 Markdown 文件中的图片路径
    
    将 Obsidian 格式 ![[../../attachments/image.png]] 
    转换为标准格式 ![image.png](/src/assets/attachements/image.png)
    
    Args:
        content: Markdown 文件内容
        
    Returns:
        转换后的内容
    """
    
    # 匹配 Obsidian 图片格式: ![[...]]
    # 注意：文件名可能包含空格，使用 [^\]]+ 匹配
    pattern = r'!\[\[([^\]]+)\]\]'
    
    def replacer(match):
        obsidian_path = match.group(1)
        # 提取文件名（最后一段）
        filename = extract_filename_from_path(obsidian_path)
        # 转换为标准 Markdown 格式，指向统一的附件目录
        # 使用相对于项目根目录的路径
        return f'![{filename}](/src/assets/attachements/{filename})'
    
    # 执行替换
    modified_content = re.sub(pattern, replacer, content)
    
    return modified_content


def process_md_file(md_file_path):
    """
    处理 Markdown 文件中的图片路径
    
    Args:
        md_file_path: Markdown 文件路径
    """
    try:
        # 读取 Markdown 文件
        with open(md_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 转换图片路径
        modified_content = convert_image_paths(content)
        
        # 写回文件
        with open(md_file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        
        print(f"✓ 成功处理文件: {md_file_path}")
        print(f"✓ 图片路径已转换至: /src/assets/attachements/")
        
    except FileNotFoundError:
        print(f"✗ 错误：文件未找到 - {md_file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ 错误：{e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python convert_md_to_html.py <md_file_path>")
        print("\n示例:")
        print("  python convert_md_to_html.py src/assets/notes/linear_algebra_cn.md")
        print("\n注意:")
        print("  - 该脚本将 Obsidian 格式的图片引用 ![[ ]] 转换为标准 Markdown 格式 ![...](...)")
        print("  - 图片路径统一指向 /src/assets/attachements/ 目录")
        print("  - 脚本会直接修改原 Markdown 文件")
        sys.exit(1)
    
    md_file = sys.argv[1]
    process_md_file(md_file)
