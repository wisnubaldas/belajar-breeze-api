<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuPageController extends Controller
{
    public function getMenu()
    {
        $menu = \App\Models\PageMenu::where('active', 0)->get();
        $treeMenu = self::generateTree($menu);
        return response()->json($treeMenu);
    }
    protected static function generateTree($items, $parentId = 0)
    {
        $tree = array();
        foreach ($items as $item) {
            if ($item['parent_id'] == $parentId) {
                $children = self::generateTree($items, $item['id']);
                if ($children) {
                    $item['children'] = $children;
                }
                $tree[] = $item;
            }
        }
        return $tree;
    }
    protected static function printTree($tree, $level = 0)
    {
        $x = '';
        $idx = 0;
        foreach ($tree as $key => $value) {

            $lbl = $badge = $icon = '';

            if ($value['label']) {
                $lbl = '<span class="menu-label" id="lbl-' . $value['id'] . '">' . $value['label'] . '</span>';
            }
            if ($value['badge']) {
                $badge = '<div class="menu-badge" id="lbl-' . $value['id'] . '">0</div>';
            }
            if ($value['icon']) {
                $icon .= '<div class="menu-icon">
                            <i class="' . $value['icon'] . '"></i>
                        </div>';
            }

            $path = 'javascript:;';
            if (!in_array($value['path'], ['javascript:;', ''])) {
                $path = url($value['path']);
            }
            if ($value['parent_id'] == 0) {
                $idx++;
            }

            $x .= '<div class="menu-item has-sub" id="' . $value['id'] . '" >';
            if (isset($value['children'])) {
                $x .= '<a href="' . $path . '" class="menu-link"  data-parent="' . $value['parent_id'] . '" >';
                $x .= $icon;
                $x .= '<div class="menu-text">' . $value['nama'] . $lbl . '</div>';
                $x .= $badge;
                $x .= '<div class="menu-caret"></div>';
                $x .= '</a>';
                $x .= '<div class="menu-submenu" >';
                $x .= self::printTree($value['children']); // melakukan rekursi jika nilai adalah array
                $x .= '</div>';
            } else {
                $x .= '<div class="menu-item" id="' . $value['id'] . '" >';
                $x .= '<a href="' . $path . '" class="menu-link"  data-parent="' . $value['parent_id'] . '" >';
                $x .= $icon;
                $x .= '<div class="menu-text">';
                $x .= $value['nama'] . $lbl;
                $x .= '</div>';
                $x .= $badge;
                $x .= '</a>';
                $x .= '</div>'; // menampilkan key dan value
            }
            $x .= '</div>';
        }

        return $x;
    }
}
