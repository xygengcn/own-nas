<template>
    <div class="home">
        <div class="container">
            <el-upload class="upload" action="http://localhost:3000/upload" :auto-upload="false" ref="upload" :file-list="fileList" :on-change="handleChange" :show-file-list="false" :multiple="true" drag>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <ul>
                <li v-for="(item,index) in fileList" :key="index">
                    name:{{item.name}}
                </li>
            </ul>
        </div>
        <div class="btn-upload">
            <el-button @click="upload()">上传</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            fileList: []
        };
    },
    methods: {
        upload() {
            this.$refs.upload.submit();
        },
        handleChange(file, fileList) {
            console.log(file);
            this.fileList = fileList.slice(-3);
        }
    }
};
</script>
<style lang="scss">
.home {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    margin: 0px auto;
    max-width: 800px;
    .container {
        flex: 1;
        margin: 0px 10px;
        .upload {
            margin: 0px auto;
            max-width: 360px;
            .el-upload {
                width: 100%;
                height: 50%;
                .el-upload-dragger {
                    width: 100%;
                }
            }
        }
    }
    .btn-upload {
        margin: 0px auto;
        width: 200px;
    }
}
</style>
