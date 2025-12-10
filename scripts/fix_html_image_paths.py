#!/usr/bin/env python3
"""
脚本功能：修复 HTML 文件中的图片路径
- 将所有图片路径统一为 /src/assets/attachements/ 的绝对路径
- 修复 Windows 路径分隔符为 Web 路径分隔符
用法: python fix_html_image_paths.py <html_file_path>
"""

import sys
import re


def extract_filename_from_path(path):
    """
    从路径中提取文件名
    支持 Windows 和 Unix 路径分隔符
    """
    # 将反斜杠替换为正斜杠
    path = path.replace('\\', '/')
    parts = path.split('/')
    return parts[-1]


def fix_image_paths(content):
    """
    修复 HTML 文件中的图片路径
    
    匹配所有 img 标签中的 src 属性，并将其替换为统一的路径
    
    Args:
        content: HTML 文件内容
        
    Returns:
        修复后的内容
    """
    
    # 匹配 img 标签中的 src 属性
    # 支持各种路径格式：src\assets\..., ../assets/..., src/assets/... 等
    pattern = r'<img\s+src="([^"]*attachements?[^"]*)"([^>]*)>'
    
    def replacer(match):
        old_src = match.group(1)
        rest = match.group(2)
        
        # 提取文件名
        filename = extract_filename_from_path(old_src)
        
        # 构建新的 src 路径（相对于项目根目录）
        new_src = f'/src/assets/attachements/{filename}'
        
        return f'<img src="{new_src}"{rest}>'
    
    # 执行替换
    modified_content = re.sub(pattern, replacer, content)
    
    return modified_content


def fix_html_image_paths(html_file_path):
    """
    处理 HTML 文件中的图片路径
    
    Args:
        html_file_path: HTML 文件路径
    """
    try:
        # 读取 HTML 文件
        with open(html_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 修复图片路径
        modified_content = fix_image_paths(content)
        
        # 写回文件
        with open(html_file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        
        print(f"✓ 成功修复文件: {html_file_path}")
        print(f"✓ 图片路径已统一为: /src/assets/attachements/")
        
    except FileNotFoundError:
        print(f"✗ 错误：文件未找到 - {html_file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ 错误：{e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python fix_html_image_paths.py <html_file_path>")
        print("\n示例:")
        print("  python fix_html_image_paths.py src/lib/linear_algebra_cn.html")
        print("\n注意:")
        print("  - 该脚本修复 HTML 文件中所有图片路径")
        print("  - 将路径统一为: /src/assets/attachements/")
        print("  - 支持各种路径格式（相对路径、Windows 路径等）")
        print("  - 脚本会直接修改原 HTML 文件")
        sys.exit(1)
    
    html_file = sys.argv[1]
    fix_html_image_paths(html_file)
