<template>
<section id='steps'>
    <el-steps :space="200" :active='active'>
        <el-step title="选择银行卡"></el-step>
        <el-step title="上传照片"></el-step>
        <el-step title="审核结果"></el-step>
    </el-steps>
    <div id="step1" v-if='active===1'>
        <section>
            <p>选择更换银行卡</p>
            <dl>
                <dd v-for='i in 3'>
                    <em class='zs'></em>
                    <div class="">
                        招商银行(尾号3456)
                    </div>
                    <label>限额：<span>单笔5万  单日5万  单月5万</span><i class="el-icon-check"></i></label>
                </dd>
            </dl>
        </section>
        <section>
            <p>选择替换的新银行卡</p>
            <dl>
                <dd v-for='i in 3'>
                    <em class='zs'></em>
                    <div class="">
                        招商银行(尾号3456)
                    </div>
                    <label>限额：<span>单笔5万  单日5万  单月5万</span><i class="el-icon-check"></i></label>
                </dd>
            </dl>
        </section>
        <p class='txt'>没有要更换的卡？请至“我的资产”-“银行卡”进行新卡绑定</p>
        <a href="javascript:;" class="btn_submit" @click='toStep2'>下一步</a>
    </div>
    <div id="step2" v-else-if='active===2'>
        <section id="old">
            <div class='img'>
                <!-- <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog> -->
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              </el-upload>
              <el-dialog v-model="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </div>
            <p>手持身份证正面，新银行卡正面照片</p>
        </section>

        <section id="new">
            <div class='img'>
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview2" :on-remove="handleRemove2">
                </el-upload>
                <el-dialog v-model="dialogVisible2" size="tiny" style='{width:100px}'>
                    <img width="100%" :src="dialogImageUrl2" alt="">
                </el-dialog>
            </div>
            <p>手持身份证正面，新银行卡正面照片</p>
        </section>
        <dl>
            <dd>证件图片要求</dd>
            <dd>1.身份证及银行卡信息拍摄完整清晰；</dd>
            <dd>2.证件必须真实拍摄，不能使用复印件；</dd>
            <dd>3.图片中无反光，无遮挡，无水印，logo等；</dd>
        </dl>
        <a href="javascript:;" class="btn_submit" @click='toStep3'>提交</a>
    </div>
    <div id="step3" v-else-if='active===3'>
        <p class='txt'>信息处理时间为1个工作日，请您耐心等待审核结果，； 请在“提现说明”-“进度查询”查看审核进度 </p>
        <a href="javascript:;" class="btn_submit bottom" @click='toStep2'>确认</a>
    </div>

    </div>
</section>
</template>

<script>
document.body.addEventListener('touchstart', function () { });

export default {
    data() {
        return {
            active: 2,
            dialogImageUrl: '',
            dialogImageUrl2: '',
            dialogVisible: false,
            dialogVisible2: false,

            defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
        }
    },
    methods: {
        toStep2() {
            this.active = 2;
        },
        toStep3() {
            this.active = 3;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove2(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview2(file) {
            this.dialogImageUrl2 = file.url;
            this.dialogVisible2 = true;
        },


        // handleView (name) {
        //         this.imgName = name;
        //         this.visible = true;
        //     },
        //     handleRemove (file) {
        //         // 从 upload 实例删除数据
        //         const fileList = this.$refs.upload.fileList;
        //         this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        //     },
        //     handleSuccess (res, file) {
        //         // 因为上传过程为实例，这里模拟添加 url
        //         file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        //         file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        //     },
        //     handleFormatError (file) {
        //         this.$Notice.warning({
        //             title: '文件格式不正确',
        //             desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        //         });
        //     },
        //     handleMaxSize (file) {
        //         this.$Notice.warning({
        //             title: '超出文件大小限制',
        //             desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        //         });
        //     },
        //     handleBeforeUpload () {
        //         const check = this.uploadList.length < 5;
        //         if (!check) {
        //             this.$Notice.warning({
        //                 title: '最多只能上传 5 张图片。'
        //             });
        //         }
        //         return check;
        //     }
    },
    mounted () {
            // this.uploadList = this.$refs.upload.fileList;
        }
}
</script>
