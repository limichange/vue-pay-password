<template>
  <span class="payPassword">
    <input
      ref="input"
      :aria-disabled="disable"
      v-model="val"
      type="password"
      :name="name"
      class="sixDigitPassword"
      @contextmenu="() => false"
      @paste="() => false"
      @copy="() => false"
      @cut="() => false"
      @blur="blur"
      autocomplete="off"
      :maxlength="length"
      :minlength="length">
    <div
      @focus="focus"
      class="sixDigitPassword"
      :tabindex="tabindex">
      <i
        :key="i"
        v-for="(index, i) in length">
        <b v-show="index <= val.length" />
      </i>
      <span
        v-show="status === MODE.FOCUS"
        :style="inputStyle" />
    </div>
  </span>
</template>

<script>
export default {
  name: 'PayPasswrod',
  props: {
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    },
    tabindex: {
      type: Number,
      default: 0
    },
    disable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'payPassword'
    }
  },
  data () {
    return {
      status: '',
      val: '',
      step: 0,
      MODE: {
        FOCUS: 1,
        BLUR: 2,
        COMPLETE: 3
      }
    }
  },
  computed: {
    inputStyle () {
      return {
        width: `29px`,
        left: `${this.val.length * this.step}px`
      }
    }
  },
  watch: {
    val (val) {
      this.$emit('input', val)

      if (this.status === this.MODE.BLUR) {
        return
      }

      if (val.length === this.length) {
        this.status = this.MODE.COMPLETE
      } else {
        this.status = this.MODE.FOCUS
      }
    },
    value (value) {
      this.updateVal(value)
    }
  },
  mounted () {
    this.status = this.MODE.BLUR
    this.updateVal(this.value)
    this.step = (this.$el.offsetWidth - 2) / this.length
  },
  methods: {
    updateVal (value) {
      if (this.val === value || value.length > this.length) {
        return
      }

      this.val = value
    },
    clear () {
      this.val = ''
      this.$emit('clear')
    },
    blur () {
      this.status = this.MODE.BLUR

      this.$emit('blur')
    },
    focus (e) {
      if (this.disable) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      this.$refs.input.focus()

      if (this.val.length === this.length) {
        this.status = this.MODE.COMPLETE
      } else {
        this.status = this.MODE.FOCUS
      }

      this.$emit('focus')
    }
  }
}
</script>

<style lang="less">
.payPassword {
  display: inline-block;
  *display: inline;
  zoom: 1;
  height: 24px;
  vertical-align: bottom;

  * {
    vertical-align: bottom
  }

  input.sixDigitPassword {
    position: absolute;
    color: #fff;
    opacity: 0;
    width: 1px;
    height: 1px;
    font-size: 1px;
    left: 0;
    box-sizing: content-box;
    -webkit-user-select: initial; /* 取消禁用选择页面元素 */
    outline: none;
    margin-left: -9999px;
  }

  div.sixDigitPassword {
    cursor: text;
    background: #fff;
    outline: none;
    position: relative;
    padding: 8px 0;
    height: 14px;
    border: 1px solid #cccccc;
    border-radius: 2px;
    box-sizing: content-box;

    i {
      float: left;
      display: block;
      padding: 4px 0;
      height: 7px;
      width: 29px;
      border-left: 1px solid #cccccc;

      &:first-child {
        border-color: transparent
      }
    }

    b {
      display: block;
      margin: 0 auto;
      width: 7px;
      height: 7px;
      overflow: hidden;
      background-image: url("./images/o.png");
    }

    span {
      position: absolute;
      display: block;
      left: 0px;
      top: -1px;
      height: 30px;
      border: 1px solid rgba(82, 168, 236, .8);
      border: ~"1px solid #00ffff\9";
      border-radius: 2px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);

      background: url("./images/l.gif") no-repeat center center;
      background-size: auto 15px;
    }
  }
}
</style>
