<template>
    <div class="home">
        <div class="container">
            <el-upload class="upload" drag action="#" :auto-upload="false" multiple ref="upload" :file-list="fileList" :on-preview="handlePreview">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </div>
        <div class="btn-upload">
            <el-button @click="upload()">上传</el-button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    data() {
        return {
            fileList: []
        };
    },
    methods: {
        upload() {
            // this.$refs.upload.submit();
        },
        handlePreview(fileList) {
            console.log(fileList);
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
            height: 100%;
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
