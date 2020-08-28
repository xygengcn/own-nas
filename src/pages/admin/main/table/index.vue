<!-- 表格 -->
<template>
    <div class="admim-main-table">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" max-height="800" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="name" label="名称" sortable column-key="name">
                <template slot-scope="scope">
                    <div class="name">
                        <icon :type="scope.row.type" />
                        <span>{{ scope.row.name }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="大小" width="120" sortable column-key="size">
            </el-table-column>
            <el-table-column label="修改日期" width="120" sortable column-key="date">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column width="120" label="操作">
                <template slot-scope="scope">
                    <i class="iconfont icon-delete btn" @click="del(scope.row)"></i>
                    <i class="iconfont icon-share btn" @click="del(scope.row)"></i>
                    <i class="iconfont icon-download btn" @click="del(scope.row)"></i>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import icon from "./icon";
export default {
    components: {
        icon
    },
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    size: "12356456",
                    type: "ppt"
                },
                {
                    date: "2016-05-03",
                    name: "a王小虎",
                    size: "11",
                    type: "js"
                }
            ],
            multipleSelection: []
        };
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        del(file) {
            console.log(file);
        }
    }
};
</script>

<style lang='scss' scoped>
.admim-main-table {
    margin: 15px 0px;

    .name {
        cursor: pointer;
    }
    .iconfont {
        margin-right: 10px;
        font-size: 18px;
        cursor: pointer;
        &.btn {
            color: #9a9a9a;
            font-size: 1.5em;
            &:hover {
                color: $theme-color;
            }
        }
    }
}
</style>