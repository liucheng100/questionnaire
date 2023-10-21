<template>
    <div class="home">
        <div :class="{
            pro: 1,
            fin: isFinished
        }">
            <div :class="{
                probox: 1,
                active: !markList?.length
            }">
                <div class="proB" ref="proB" @mousedown.stop="mousedownFn" @touchstart.stop.prevent="mousedownFn"
                    @touchmove.stop.prevent="mousemoveFn" @touchend.stop="mouseupFn">
                    <div class="prodot" :style="{
                        top: pro_percent + '%'
                    }">

                    </div>
                    <transition-group name="fade" appear>
                        <div v-for="(ref, idx) in markList" :key="idx" :class="{
                            mark: 1,
                            active: Math.abs(pro_percent - calcPer(ref)) < 2.2
                        }" :style="{
    top: calcPer(ref) + '%'
}">

                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
        <div ref="mid" :class="{
            mid: 1,
            fin: isFinished,
        }" @scroll="scrollFn">
            <div ref="midbox" class="midbox">
                <div class="title">
                    2023-2024学年秋季学期开学初思想动态调研问卷
                </div>
                <div class="title-1">
                    （2023年9月）
                </div>
                <div class="passage">
                    {{ passage }}
                    <div class="passage-1">
                        {{ "天津大学党委学生工作部、学生处\n2023年9月" }}
                    </div>
                </div>
                <div class="margin"></div>
                <div :ref="q.bg_id" class="container" v-for="(q, idx) in mockData.test">
                    <div v-if="q.type == 1" v-show="q.appear(mockData.param)" class="block">
                        <div class="b-title">
                            <div class="idxW">
                                {{ idx + 1 }}.
                            </div>
                            <div>
                                {{ q.title }}
                            </div>
                        </div>
                        <div class="options">
                            <div v-show="opt.appear(mockData.param)" @click="click_1(q, opt)"
                                @keypress.enter="click_1(q, opt)" tabindex="1" class="opt" v-for="opt in q.opts">
                                <div :class="{
                                    'o-dot': 1,
                                    'active': opt.active
                                }"></div>
                                <div :class="{
                                    'o-txt': 1,
                                    'active': opt.active
                                }">
                                    <div>
                                        {{ opt.txt }}
                                    </div>
                                    <input v-if="opt.extra" type="text" v-model="opt.strVal" class="inputbox long">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="q.type == 2" v-show="q.appear(mockData.param)" class="block">
                        <div class="b-title">
                            <div class="idxW">
                                {{ idx + 1 }}.
                            </div>
                            <div>
                                {{ q.title }}
                            </div>
                        </div>
                        <div class="options">
                            <div v-show="opt.appear(mockData.param)" @click="click_2(q, opt)"
                                @keypress.enter="click_2(q, opt)" tabindex="1" class="opt" v-for="opt in q.opts">
                                <div :class="{
                                    'o-dot': 1,
                                    'checkbox': 1,
                                    'active': opt.active
                                }"></div>
                                <div :class="{
                                    'o-txt': 1,
                                    'active': opt.active
                                }">
                                    <div>
                                        {{ opt.txt }}
                                    </div>
                                    <input @click.stop v-if="opt.extra"
                                        @input="q.bg_id == 'd_1' ? opt.strVal ? opt.active = 1 : opt.active = 0 : 0"
                                        type="text" v-model="opt.strVal" class="inputbox long">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="q.type == 3" class="block">
                        <div class="b-title">
                            <div class="idxW">
                                {{ idx + 1 }}.
                            </div>
                            <div>
                                {{ q.title }}
                            </div>
                        </div>
                        <div class="options">
                            <div class="opt">
                                <input tabindex="1" v-model="q.strVal" type="text" class="inputbox">
                            </div>
                        </div>
                    </div>
                    <div v-if="q.type == 4" class="block">
                        <div class="b-title">
                            <div class="idxW">
                                {{ idx + 1 }}.
                            </div>
                            <div>
                                {{ q.title }}
                            </div>
                        </div>
                        <div class="options">
                            <div class="sub" v-for="sub in q.subs">
                                <div class="sub-txt">
                                    {{ sub.txt }}
                                </div>
                                <div class="elbar">
                                    <el-slider v-model="sub.value" :min="1" :max="7" :step="1" :marks="marks" show-stops />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="q.type == 5" class="block">
                        <div class="b-title">
                            <div class="idxW">
                                {{ idx + 1 }}.
                            </div>
                            <div>
                                {{ q.title }}
                            </div>
                        </div>
                        <div class="options">
                            <img v-if="!q.noImg" class="imgbar" src="../assets/type5.png" alt="">
                            <div id="el-nobg" class="elbar">
                                <el-slider v-model="q.value" :min="1" :max="7" :step="1" :marks="marks" show-stops />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{
                bot: 1,
                active: !markList?.length,
                fin: isFinished
            }">
                <div v-if="!isFinished" @click="submitFn" :class="{
                    'submit-art': 1,
                    'active': !markList?.length,
                }">
                    提交
                </div>
                <div v-if="isFinished">
                    {{ '提交成功！\n感谢您百忙之中抽出时间填写该问卷，祝您生活愉快！' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import mock from "@/mock1";
import { postSurvey } from "@/api/send";
import { reactive } from "vue"
export default {
    computed: {

    },
    data() {
        return {
            pro_percent: 0,
            mousetouch: {
                startY: 0,
                startT: 0,
                on: false
            },

            mockData: {},
            marks: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
            },
            markList_real: [],
            timer: 0,

            markList: [],
            lock: true,
            isFinished: false,
            passage: "亲爱的同学：\n\t您好！\n\t为充分了解大家新学期返校后的思想状况和实际需求，天津大学学工部面向在校生发起此次调研，全部作答完成约5-8分钟。调研数据将以群体为单位进行分析和报告，对涉及的个人信息将严格保密。\n在填写过程中，请根据您的真实感受作答，感谢您的支持与参与！",
        }
    },
    watch: {
        // markList(to, from) {
        //     //防抖
        //     clearTimeout(this.timer)
        //     this.timer = setTimeout(() => {
        //         this.markList_real = to
        //     }, 0);
        //     // console.log(this.markList_real)
        // },
        mockData: {
            handler(to, from) {
                let ml = [];
                // this.markList = [];
                // console.log(9898)
                if (!this.mockData.test) {
                    return
                };
                this.$nextTick(() => {
                    this.mockData.test.forEach(ele => {
                        if (!ele.appear(this.mockData.param)) {
                            return;
                        }
                        let inML = true

                        if (ele.type == 1) {
                            // 单选
                            ele.opts.forEach(opt => {
                                if (!opt.appear(this.mockData.param)) {
                                    return;
                                }

                                if (opt.active) {
                                    inML = false
                                }
                            });
                        } else if (ele.type == 2) {
                            // 不定项
                            ele.opts.forEach(opt => {
                                if (!opt.appear(this.mockData.param)) {
                                    return;
                                }

                                if (opt.active) {
                                    inML = false
                                }
                            });
                        } else if (ele.type == 3) {
                            // 填空
                            if (ele.strVal) {
                                inML = false
                            }
                        } else if (ele.type == 4) {
                            // 分值题
                            inML = false

                        } else if (ele.type == 5) {
                            // 图片
                            inML = false

                        }


                        if (inML) {
                            // ml.push(ele.bg_id)

                            let dom = this.$refs[ele.bg_id]
                            if (dom) {
                                console.log(9)
                                let toTop = dom[0].offsetTop

                                let wrapH = this.$refs.mid.scrollHeight
                                let viewH = this.$refs.mid.offsetHeight
                                let proH = this.$refs.proB.offsetHeight
                                // console.log(toTop, wrapH, viewH, toTop/(wrapH+viewH))

                                // console.log(dom)
                                ml.push(100 * toTop / (wrapH - viewH) - viewH / 3 / wrapH)
                                // 为什么要写这个啊为什么为什么啊
                                // 不写打开页面如果不滚动页面上面的v-for没有东西
                                // this.$forceUpdate()
                                // console.log(ml)
                            }

                        }

                    });
                    this.markList = ml;
                })
                // console.log(ml.length, ml)
                // return ml;
            },
            deep: true
        }
    },
    computed: {
        // 计算属性中不能再有响应变量不然会监听
        // markList() {
        //     console.log('commarkList')
        //     // let ml = reactive([]);
        //     let ml = [];
        //     if (!this.mockData.test) {
        //         return
        //     };
        //     this.mockData.test.forEach(ele => {
        //         if (!ele.appear(this.mockData.param)) {
        //             return;
        //         }
        //         let inML = true

        //         if (ele.type == 1) {
        //             // 单选
        //             ele.opts.forEach(opt => {
        //                 if (!opt.appear(this.mockData.param)) {
        //                     return;
        //                 }

        //                 if (opt.active) {
        //                     inML = false
        //                 }
        //             });
        //         } else if (ele.type == 2) {
        //             // 不定项
        //             ele.opts.forEach(opt => {
        //                 if (!opt.appear(this.mockData.param)) {
        //                     return;
        //                 }

        //                 if (opt.active) {
        //                     inML = false
        //                 }
        //             });
        //         } else if (ele.type == 3) {
        //             // 填空
        //             if (ele.strVal) {
        //                 inML = false
        //             }
        //         } else if (ele.type == 4) {
        //             // 分值题
        //             inML = false

        //         } else if (ele.type == 5) {
        //             // 图片
        //             inML = false

        //         }


        //         if (inML) {
        //             // ml.push(ele.bg_id)

        //             // this.setTimeout(() => {
        //             let dom = this.$refs[ele.bg_id]
        //             if (dom) {
        //                 console.log(9)
        //                 let toTop = dom[0].offsetTop

        //                 let wrapH = this.$refs.mid.scrollHeight
        //                 let viewH = this.$refs.mid.offsetHeight
        //                 let proH = this.$refs.proB.offsetHeight
        //                 // console.log(toTop, wrapH, viewH, toTop/(wrapH+viewH))

        //                 // console.log(dom)
        //                 ml.push(100 * toTop / (wrapH - viewH) - viewH / 3 / wrapH)
        //                 // 为什么要写这个啊为什么为什么啊
        //                 // 不写打开页面如果不滚动页面上面的v-for没有东西
        //                 // this.$forceUpdate()
        //                 // console.log(ml)
        //             }
        //             // }, 100)

        //         }

        //     });
        //     console.log(ml.length, ml)
        //     return ml;
        // }
    },
    methods: {
        scrollFn() {
            let wrapH = this.$refs.mid.scrollHeight
            let viewH = this.$refs.mid.offsetHeight
            let scrollH = this.$refs.mid.scrollTop
            this.pro_percent = scrollH / (wrapH - viewH) * 100
            // console.log(wrapH,viewH,scrollH)
            // console.log(this.pro_percent)
        },
        mousedownFn(e) {
            let isTouch = e.type === 'touchstart'

            this.mousetouch.startY = isTouch ? e.touches[0].clientY : e.clientY
            this.mousetouch.startT = this.$refs.mid.scrollTop
            this.mousetouch.on = true
        },
        mousemoveFn(e) {
            e.stopPropagation()
            if (!this.mousetouch.on) return;
            let isTouch = e.type === 'touchmove'
            let curY = isTouch ? e.touches[0].clientY : e.clientY
            let delta = curY - this.mousetouch.startY
            let proH = this.$refs.proB.offsetHeight
            // console.log(delta/proH,delta,this.mousetouch.startY)
            let wrapH = this.$refs.mid.scrollHeight
            let viewH = this.$refs.mid.offsetHeight
            let scrollH = this.$refs.mid.scrollTop
            this.$refs.mid.scrollTop = this.mousetouch.startT + (delta / proH) * (wrapH - viewH)
        },
        mouseupFn(e) {
            e.stopPropagation()
            this.mousetouch.on = false
        },
        click_1(q, opt) {
            // 单选
            q.opts.forEach(element => {
                element.active = false
                element.tarParam(this.mockData.param)
            });
            opt.active = true;
            opt.tarParam(this.mockData.param)
        },
        click_2(q, opt) {
            // 不定项
            if (q.max) {
                let sum = 0
                q.opts.forEach(element => {
                    if (element.active) {
                        sum++
                    }
                });
                if (sum >= q.max && !opt.active) {
                    ElMessage.info(`最多选${q.max}项`)
                } else {
                    opt.active = !opt.active;
                    opt.tarParam(this.mockData.param)
                }
            } else {
                if (opt.active) {
                    if (opt.strVal) {
                        // 有东西的话禁止取消
                    } else {
                        opt.active = !opt.active;

                    }
                } else {
                    opt.active = !opt.active;
                }
                opt.tarParam(this.mockData.param)
            }

        },
        calcPer(ref) {
            return ref;
            let dom = this.$refs[ref]
            if (dom) {
                // console.log(9)
                let toTop = dom[0].offsetTop

                let wrapH = this.$refs.mid.scrollHeight
                let viewH = this.$refs.mid.offsetHeight
                let proH = this.$refs.proB.offsetHeight
                // console.log(toTop, wrapH, viewH, toTop/(wrapH+viewH))

                // console.log(dom)
                // ml.push(100 * toTop / (wrapH - viewH))
                // this.$forceUpdate()
                // console.log(ml)
                return 100 * (toTop / (wrapH - viewH) - (viewH / 2.5) / wrapH);
            }
        },
        submitFn() {
            if (this.markList?.length) {
                ElMessage.info('先消除左侧的小红点点吧')
                return;
            }
            if (this.lock) {
                ElMessage.info('正在提交中')
                this.lock = false
            } else {
                ElMessage.info('请勿重复点击')
                return;
            }
            let body = {}
            this.mockData.test.forEach(q => {
                if (!q.appear(this.mockData.param)) return;
                if (q.type == 1) {
                    // 单选题
                    let ans = ''
                    q.opts.forEach(opt => {
                        if (!opt.appear(this.mockData.param)) return;
                        if (opt.active) {
                            ans = opt.bg_idx + ' ' + opt.txt
                            if (opt.extra) {
                                ans += '  ' + opt.strVal
                            }
                        }
                    });
                    body[q.bg_id] = ans
                } else if (q.type == 2) {
                    // 不定项
                    let ansl = []
                    q.opts.forEach(opt => {
                        if (!opt.appear(this.mockData.param)) return;
                        if (opt.active) {
                            let ans = opt.bg_idx + ' ' + opt.txt
                            if (opt.extra) {
                                ans += '  ' + opt.strVal
                            }
                            ansl.push(ans)
                        }
                    });
                    body[q.bg_id] = ansl
                } else if (q.type === 3) {
                    body[q.bg_id] = q.strVal.toString()
                } else if (q.type === 4) {
                    let ansl = []
                    q.subs.forEach(sub => {
                        ansl.push(sub.value.toString())
                    });
                    body[q.bg_id] = ansl
                } else if (q.type === 5) {
                    body[q.bg_id] = (q.value).toString()
                }
            });
            console.log(body)
            postSurvey(body).then(v => {
                console.log(v)
                if (!v.code) {
                    ElMessage.success('上传成功')
                    this.isFinished = true;
                } else {
                    this.lock = true
                }
            }).catch(e => {
                ElMessage.error(e)
                this.lock = true
            })
        }
    },
    mounted() {
        this.mockData = mock;
        window.addEventListener('mousemove', this.mousemoveFn)
        window.addEventListener('mouseup', this.mouseupFn)

    },
    beforeUnmounted() {
        window.removeEventListener('mousemove', this.mousemoveFn)
        window.removeEventListener('mouseup', this.mouseupFn)
    }
};
</script>
<style scoped>
.home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    --marginW: 3vw;
    background-color: rgb(236, 239, 241);
    overflow: hidden;
    padding: 0 var(--marginW);
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: center; */
}

.pro {
    width: 8vw;
    display: flex;
    align-items: center;
    position: relative;
    transition: .2s;
    right: 0;
}

.pro.fin {
    width: 0;
    opacity: 0;
}

.probox {
    height: 60vh;
    background-color: #fff;
    width: 100%;
    border-radius: 4vw;
    padding: 4vw 0;
    transition: .2s;
}

.probox.active {
    transform: translateY(-10vh);
}

.proB {
    height: 100%;
    width: 100%;
    position: relative;
}

.prodot {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.5vw;
    height: 6.5vw;
    border-radius: 50%;
    background-color: rgba(115, 122, 129, 0.26);
    top: 100%;

}


.mid {
    flex: 1;
    margin-left: calc(var(--marginW) / 1.5);
    overflow: auto;
    position: relative;
    transition: .2s;
}

.mid.fin {
    margin-left: 0;
}

.midbox {
    margin: 5vh 0;
    margin-bottom: 0;
    width: 100%;
    min-height: 200vh;
    background-color: #fff;
    border-radius: 2.5vw;
    padding: 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mid::-webkit-scrollbar {
    width: 0;
}

.title {
    font-weight: 800;
    font-size: 21Px;
    text-align: center;
}

.title-1 {
    margin-top: 30px;
    font-size: 17Px;
    text-align: center;
}

.passage {
    margin-top: 40Px;
    font-size: 16Px;
    white-space: pre-wrap;
    line-height: 27.6Px;
    font-style: italic;
}

.passage-1 {
    margin-top: 30px;
    text-align: end;
    white-space: pre-wrap;
}

.margin {
    margin-top: 30Px;
}

.block {
    width: 100%;
    margin: 20px 0;
    padding-bottom: 4Px;
    padding-right: 4px;
    border-radius: 0 0 10Px 0;
    overflow: hidden;
    box-shadow: 3Px 3Px 0Px -1px rgba(0, 0, 0, 0.03);
}

.b-title {
    font-weight: 800;
    font-size: 19Px;
    display: flex;
    align-items: flex-start;
}

.options {
    margin-top: 10Px;
    background-color: #fff;
    font-size: 17Px;
    overflow: hidden;
}

.opt {
    padding: 6Px;
    padding-left: 16px;
    display: flex;
    align-items: flex-start;
}



.imgbar {
    width: 100%;
}

.o-dot {
    height: 14Px;
    width: 14Px;
    transform: translateY(calc(.5em - 1.7px));
    border-radius: 50%;
    border: solid 2.5Px white;
    box-shadow: 0 0 0Px 1.2Px rgb(77, 85, 97);
    margin-right: 10Px;
    flex-shrink: 0;

}

.o-dot.active {
    box-shadow: 0 0 0Px 1.2Px rgb(68, 143, 255);
    background-color: rgb(95, 159, 255);
}

.o-txt.active {
    color: rgb(91, 153, 245);
}

.container {
    width: 100%;
}

.inputbox {
    outline: none;
    border: 0;
    height: 30px;
    width: 150px;
    color: grey;
    text-align: center;
    font-size: 18px;
    border-bottom: solid 2px rgb(193, 192, 192);
}

.inputbox.long {
    width: 52vw;
}

.o-dot.checkbox {
    border-radius: 3px;
}

.idxW {
    min-width: 15px;
    flex-shrink: 0;
    height: 12px;
    margin-right: 4px;
}

.sub {
    background-color: #fafafa;
    margin-top: 10px;
}

.sub-txt {
    padding: 6px 16px;
}

.elbar {
    padding: 6px 16px;
    display: flex;
    align-items: flex-start;
    padding-bottom: 22px;
}

.sub-txt {
    flex-shrink: 0;
    width: 100%;
}

.bot {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    transition: .2s;
}

.bot.active {
    position: sticky;
    bottom: 0;
    z-index: 999;
    background-color: rgb(236, 239, 241);
}

.bot.fin {
    height: 100vh;
    transition: .4s;
    text-align: center;
    white-space: pre-wrap;
}

.submit-art {
    background-color: rgba(156, 157, 182, 0.186);
    padding: 20px 50px;
    border-radius: 15px;
    transition: .3s;
}

.submit-art.active {
    background-color: rgba(58, 169, 255, 0.15);
    color: rgba(92, 134, 201, 0.99);
    padding: 20px 50px;
    border-radius: 15px;
    transform: translateX(-4.75vw);
}

.submit-art.fin {}

.mark {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    /* width: 100%; */
    background-color: rgba(255, 0, 0, 0.2);
    pointer-events: none;
    transition: .2s;
    transform-origin: 0% 0%;
}

.mark.active {
    background-color: rgba(255, 0, 0, 1);
    width: 4vw;
    height: 4vw;


}

.fade-leave-to,
.fade-enter-from {
    transform: scale(0.1);
    opacity: 0;
}
</style>

<style>
#el-nobg .el-slider__bar {
    background: transparent !important;
}
</style>
