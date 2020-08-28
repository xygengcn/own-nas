<!-- header菜单栏 -->
<template>
    <div class="header">
        <div class="logo">
            <h1>NAS存储库</h1>
        </div>
        <el-menu :default-active="activeIndex" class="admin-header-menu" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">
                文件管理
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" class="float-right">用户</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            activeIndex: "1"
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang='scss' scoped>
.header {
    display: flex;
    height: 60px;
    .logo {
        text-emphasis: none;
        h1 {
            width: 180px;
            margin: 0;
            height: 60px;
            line-height: 60px;
        }
    }

    .admin-header-menu {
        padding-left: 20px;
        width: 100%;
        border: none;
        .el-menu-item {
            padding: 0px 10px;
        }
        .float-right {
            float: right;
        }
    }
}
</style>