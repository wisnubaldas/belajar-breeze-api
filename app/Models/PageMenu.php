<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageMenu extends Model
{
    protected $fillable = ["parent_id", "name", "path", "icon", "label","badge","active","right_icon","remark"];
}
