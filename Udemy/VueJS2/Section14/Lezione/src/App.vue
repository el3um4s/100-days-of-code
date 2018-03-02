<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animations</h1>
      <hr>
      <select v-model="alertAnimation" class="form-control">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <hr>
      <button type="button" name="button" class="btn btn-primary" @click="show = !show"> Show Alert </button>
      <br><br>
      <!-- <transition name="fade">
        <div class="alert alert-info" v-if="show">This is some Info</div>
      </transition>
      <transition name="slide" type="animation">
        <div class="alert alert-info" v-if="show">This is some Info</div>
      </transition>
      <transition name="slide" type="animation" appear>
        <div class="alert alert-info" v-if="show">This is some Info</div>
      </transition>
      <transition enter-active-class="animated bounce" leave-active-class="animated shake">
        <div class="alert alert-info" v-if="show">This is some Info</div>
      </transition>
      <transition :name="alertAnimation">
        <div class="alert alert-info" v-if="show">This is some Info</div>
      </transition> -->
      <transition :name="alertAnimation" mode="out-in">
        <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
        <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
      </transition>
      <hr>
      <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
      <br><br>
      <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"

          :css="false"
          >
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
      </transition>
      <hr>
      <button class="btn btn-primary"
        @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert' ">Toggle Components</button>
      <br>
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>
      <hr>
      <button class="btn btn-primary" @click="addItem">Add Item</button>
      <br><br>
      <ul class="list-group">
        <transition-group name="slide">
              <li
                class="list-group-item"
                v-for="(number, index) in numbers"
                @click="removeItem(index)"
                style="cursor: pointer;"
                :key="number">
                {{ number }}
              </li>
          </transition-group>
      </ul>

    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animate.css</h1>
      <hr>
      <select v-model="enterAnim" class="form-control">
        <option value="bounce">bounce</option>
        <option value="shake">shake</option>
        <option value="flash">flash</option>
        <option value="pulse">pulse</option>
        <option value="rubberBand">rubberBand</option>
        <option value="headShake">headShake</option>
        <option value="swing">swing</option>
        <option value="tada">tada</option>
        <option value="wobble">wobble</option>
        <option value="jello">jello</option>
        <option value="fadeIn">fadeIn</option>
        <option value="flipInX">flipInX</option>
        <option value="flipInY">flipInY</option>
        <option value="rotateIn">rotateIn</option>
        <option value="rotateOut">rotateOut</option>
        <option value="hinge">hinge</option>
        <option value="jackInTheBox">jackInTheBox</option>
        <option value="rollIn">rollIn</option>
        <option value="rollOut">rollOut</option>
        <option value="zoomIn">zoomIn</option>
        <option value="zoomOut">zoomOut</option>
        <option value="slideInLeft">slideInLeft</option>
        <option value="slideOutUp">slideOutUp</option>
      </select>
      <hr>
      <button type="button" name="button" class="btn btn-primary" @click="showAnimation = !showAnimation"> Show Alert </button>
      <br />
      <br />
      <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
        <div class="alert alert-info" v-if="showAnimation">This is some Info</div>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';

export default {
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  },
  data() {
    return {
      show: false,
      alertAnimation: "fade",
      enterAnim: "bounce",
      leaveAnim: "bounce",
      showAnimation: true,
      load: true,
      elementWidth: 100,
      selectedComponent: 'app-success-alert',
      numbers: [1,2,3,4,5,6]
    }
  },
  computed: {
    enterClass() {
      return `animated ${this.enterAnim}`;
    },
    leaveClass() {
      return `animated ${this.enterAnim}`;
    },
  },
  methods: {
    beforeEnter(el){
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done){
      console.log('enter');
      let round = 1;
      const interval = setInterval(()=>{
        el.style.width =(this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el){
      console.log('afterEnter');
    },
    enterCancelled(el){
      console.log('enterCancelled');
    },
    beforeLeave(el){
      console.log('beforeLeave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done){
      console.log('leave');
      let round = 1;
      const interval = setInterval(()=>{
        el.style.width =(this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el){
      console.log('afterLeave');
    },
    leaveCancelled(el){
      console.log('leaveCancelled');
    },
    addItem(){
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length+1)
    },
    removeItem(index){
      this.numbers.splice(index,1);
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave {}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
