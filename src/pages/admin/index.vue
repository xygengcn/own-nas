<!-- 后台界面 -->
<template>
    <div id="admin">
        <el-container>
            <el-header id="admin-header">
                <admin-header></admin-header>
            </el-header>
            <el-container id="admin-container">
                <el-aside width="200px" id="admin-aside">
                    <admin-aside></admin-aside>
                </el-aside>
                <el-main id="admin-main">
                    <admin-main></admin-main>
                </el-main>
            </el-container>
        </el-container>
        <upload id="upload" />
    </div>
</template>

<script>
import adminHeader from "./header";
import adminAside from "./aside";
import adminMain from "./main";
import upload from "@/pages/upload";
export default {
    components: { adminHeader, adminAside, adminMain, upload },
    data() {
        return {};
    }
};
</script>
<style lang='scss'>
#admin {
    position: relative;
    height: 100%;
    .el-container {
        height: 100%;
    }
    #admin-header {
        background-color: #545c64;
        color: #fff;
    }
    #upload {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}
</style>