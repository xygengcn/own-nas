<!-- 最近文件 -->
<template>
    <div class="aside">
        <el-menu class="admin-aside-menu" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
                <i class="el-icon-folder"></i>
                <span slot="title">全部文件</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-time"></i>
                <span slot="title">最近</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-link"></i>
                <span slot="title">分享</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang='scss'>
.aside {
    height: 100%;
    .admin-aside-menu {
        height: 100%;
    }
}
</style>