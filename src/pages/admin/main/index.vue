<!-- 文件列表 -->
<template>
    <div class="main">
        <admin-main-header></admin-main-header>
        <admin-main-table></admin-main-table>
    </div>
</template>

<script>
import adminMainHeader from "./header";
import adminMainTable from "./table";
export default {
    components: { adminMainHeader, adminMainTable },
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>