<!-- 文件目录 -->
<template>
    <div class="admin-main-header">
        <div class="row header-path">
            <div class="icon"><i class="iconfont icon-folder"></i></div>
            <div class="input" v-if="isEditPath"><input v-model="filePath" class="input" @blur="changePath()"></div>
            <div class="path" v-if="!isEditPath" @dblclick="changePath()">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="row header-btn">
            <el-button>上传</el-button>
            <el-button>新建文件夹</el-button>
            <el-button>移动</el-button>
            <el-button>刷新</el-button>
            <el-button type="danger">删除</el-button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            filePath: "F/server/upload",
            isEditPath: false
        };
    },
    methods: {
        changePath() {
            this.isEditPath = !this.isEditPath;
        }
    },
    computed: {
        breadcrumb() {
            return this.filePath.split("/");
        }
    }
};
</script>

<style lang='scss' scoped>
.admin-main-header {
    padding: 0px 10px;
    .row {
        margin: 10px 0px;
        &.header-path {
            position: relative;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            color: #606266;
            display: flex;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            width: 100%;
            .icon {
                width: 40px;
                text-align: center;
            }
            .input {
                flex: 1;
                padding-right: 15px;
                input {
                    width: 100%;
                    border: none;
                    -webkit-appearance: none;
                    background-color: #fff;
                    background-image: none;
                    outline: 0;
                    padding: 0;
                    font-size: 1em;
                    &:focus {
                        outline: none;
                    }
                }
            }
            .path {
                flex: 1;
                cursor: pointer;
                .el-breadcrumb {
                    line-height: 40px;
                }
            }
        }
    }
}
</style>