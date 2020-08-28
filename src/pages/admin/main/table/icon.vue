<!-- 图标 -->
<template>
    <i :class="className"></i>
</template>

<script>
export default {
    props: ["type"],
    data() {
        return {
            extIcon: {
                folder: "icon-folder",
                php: "icon-php",
                doc: "icon-word",
                docx: "icon-word",
                ppt: "icon-ppt",
                pptx: "icon-ppt",
                txt: "icon-txt",
                xsl: "icon-excel",
                xslx: "icon-excel",
                bmp: "icon-image",
                jpg: "icon-image",
                png: "icon-image",
                tiff: "icon-image",
                gif: "icon-image",
                svg: "icon-image",
                psd: "icon-image",
                raw: "icon-image",
                mp4: "icon-video",
                avi: "icon-video",
                mov: "icon-video",
                wmv: "icon-video",
                mpeg: "icon-video",
                rmvb: "icon-video",
                flv: "icon-video",
                "3gp": "icon-video",
                mp3: "icon-music",
                flac: "icon-music",
                aac: "icon-music",
                zip: "icon-zip",
                rar: "icon-zip",
                jar: "icon-zip",
                "7z": "icon-zip",
                pdf: "icon-pdf",
                sql: "icon-sql",
                exe: "icon-Exe",
                html: "icon-html",
                htm: "icon-html",
                xhtml: "icon-html",
                js: "icon-JS",
                jsx: "icon-JS",
                ts: "icon-JS",
                tsx: "icon-JS",
                json: "icon-json",
                css: "icon-css",
                scss: "icon-css",
                less: "icon-css",
                cpp: "icon-cpp",
                h: "icon-cpp",
                hpp: "icon-cpp",
                other: "icon-unknown"
            }
        };
    },
    computed: {
        className() {
            return `iconfont ${
                this.extIcon[this.type]
                    ? this.extIcon[this.type]
                    : this.extIcon["other"]
            }`;
        }
    }
};
</script>

<style lang='scss' scoped>
</style>