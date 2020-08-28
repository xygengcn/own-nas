<!-- 上传页面 -->
<template>
    <div class="upload" v-if="isActive">
        <uploader :options="options">
            <uploader-unsupport></uploader-unsupport>
            <div class="header">
                <el-button type="primary" size="small">
                    <uploader-btn>上传文件</uploader-btn>
                </el-button>
                <el-button type="primary" size="small">
                    <uploader-btn :directory="true">上传文件夹</uploader-btn>
                </el-button>
            </div>
            <div class="container">
                <uploader-drop>
                    <uploader-list></uploader-list>
                </uploader-drop>
            </div>

        </uploader>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            options: {
                target: "http://localhost:3000/upload",
                testChunks: false,
                autoStart: false,
                chunkSize: 1024 * 1024 * 2, //1MB
                simultaneousUploads: 3, //并发上传数
                headers: {
                    "access-token": "abcd1234"
                }
            },
            attrs: {
                accept: "image/*"
            }
        };
    }
};
</script>

<style lang='scss' scoped>
.uploader {
    width: 880px;
    height: 400px;
    padding: 15px;
    font-size: 12px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;

    .header {
        .uploader-btn {
            margin-right: 4px;
            border: none;
            color: #fff;
            &:hover {
                background-color: rgba(0, 0, 0, 0);
            }
        }
    }
    .container {
        flex: 1;
        padding-top: 20px;
        overflow: hidden;
        .uploader-drop {
            background-color: #fff;
            min-height: 100%;
        }
        .uploader-list {
            overflow: auto;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
}
</style>