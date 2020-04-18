<template>
  <button
    class="ei-button"
    :class="{
    disabled:disabled,
    circle:circle,
    autofocus:autofocus,
    loading:loading,
    round:round,
    plain:plain,
   // 尺寸
    eiButtonSmall:small,
    eiButtonMedium:medium,
    eiButtonMini:mini,
    elButtonLarge:large
    //类型
    }"
    @click="onClick"
  >
    <slot>button</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class EIBUtton extends Vue {
  @Prop(String) size: string | undefined; //按钮大小
  @Prop(String) type: string | undefined; //按钮类型
  @Prop(String) icon: string | undefined; //按钮图标
  @Prop(String) nativeType: string | undefined; //原生type属性

  @Prop(Boolean) plain?: boolean; //是否朴素按钮
  @Prop(Boolean) round?: boolean; //是否圆角按钮
  @Prop(Boolean) circle?: boolean; //是否圆形按钮
  @Prop(Boolean) loading?: boolean; //是否加载中状态
  @Prop(Boolean) disabled?: boolean; //是否禁用状态
  @Prop(Boolean) autofocus?: boolean; //是否默认聚焦

  //Size
  medium: boolean = true;
  small: boolean = false;
  mini: boolean = false;
  large: boolean = false;

  //type
  default: boolean = true;
  primary: boolean = false;
  success: boolean = false;
  warning: boolean = false;
  danger: boolean = false;
  info: boolean = false;
  text: boolean = false;

  //nativeType
  button: boolean = true;
  submit: boolean = false;
  reset: boolean = false;

  @Emit() fun() {}
  onClick(): void {
    this.fun();
  }

  initSize() {
    switch (this.size) {
      case "small":
        {
          this.small = true;
          this.medium = false;
        }

        break;
      case "medium":
        break;
      case "mini":
        {
          this.medium = false;
          this.mini = true;
        }
        break;
      case "large":
        {
          this.medium = false;
          this.large = true;
        }
        break;
      default:
        break;
    }
  }
  initType() {
    switch (this.type) {
      case "default":
        {
        }
        break;
      case "primary":
        {
          this.default = false;
          this.primary = true;
        }
        break;
      case "success":
        {
          this.default = false;
          this.success = true;
        }
        break;
      case "warning":
        {
          this.default = false;
          this.warning = true;
        }
        break;
      case "danger":
        {
          this.default = false;
          this.danger = true;
        }
        break;
      case "info":
        {
          this.default = false;
          this.info = true;
        }
        break;
      case "text":
        {
          this.default = false;
          this.text = true;
        }
        break;
      default:
        break;
    }
  }
  initNativeType() {
    //primary / success / warning / danger / info / text
    switch (this.nativeType) {
      case "button":
        break;
      case "submit ":
        {
          this.button = false;
          this.submit = true;
        }
        break;
      case "reset":
        {
          this.button = false;
          this.reset = true;
        }
        break;
      default:
        break;
    }
  }

  mounted() {
    this.initSize();
    this.initType();
    this.initNativeType();
  }
}
</script>
