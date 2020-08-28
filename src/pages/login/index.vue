<!-- 登录界面 -->
<template>
    <div id="login">
        <div class="title">
            <el-link href="/" :underline="false">
                <h2>NAS管理后台</h2>
            </el-link>
        </div>
        <div class="container">
            <form action="" class="form">
                <div class="form-item">
                    <input class="form-input" name="username" id="username" v-model="user.name" autocomplete="off" placeholder="USERNAME">
                </div>
                <div class="form-item">
                    <input class="form-input" type="password" name="password" id="password" v-model="user.password" autocomplete="off" placeholder="PASSWORD">
                    <i class="iconfont icon-login" @click="submit()"></i>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            user: {
                password: "",
                name: ""
            }
        };
    },
    methods: {
        submit() {
            console.log(this.user);
        }
    }
};
</script>

<style lang='scss'>
#login {
    width: 100%;
    height: 100%;
    margin: 100px auto;
    .title {
        margin: 50px auto;
        overflow: hidden;
    }
    .container {
        display: flex;
        justify-content: center;
        margin: 50px auto;

        .form {
            width: 210px;
            position: relative;
            .form-item {
                margin: 15px 0px;
                position: relative;
                .form-input {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px 15px;
                    border: none;
                    border: 1px solid $theme-color;
                    border-radius: 10px;
                    &:focus {
                        outline: none;
                        border: 1px solid $theme-color;
                    }
                    &#password {
                        padding-right: 40px;
                    }
                }
                .iconfont {
                    position: absolute;
                    right: 0;
                    width: 40px;
                    height: 100%;
                    line-height: 37px;
                    font-size: 1.2em;
                    color: #808080;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>