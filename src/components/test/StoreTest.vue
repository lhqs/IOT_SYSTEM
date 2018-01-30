<template>
  <div>

    <h3>{{$store.state.num}}</h3>
    <h2>{{$store.state.count}}</h2>
    <h2>{{count1}}</h2>
    <h1>{{num}}</h1>
    <button @click="addmethod">add</button>
    <button @click="reducemethod">add</button>
    <button @click="$store.commit('addnum')">add</button>
    <button @click="$store.commit('reducenum')">add</button>

    <button @click="one('alert(\'other\')')"> alert </button>

    <hr>

    <button @click="addAction" > add action </button>
  </div>

</template>

<script>
  import  store from '@/store/store';
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        data() {
          return {
            msg:'hello vuex'
          }
        },
      // computed:mapState(['count']),
      computed:{...mapState({
        count:state=>state.count,
        num:state=>state.num
      }),
        count1() {
          return this.$store.getters.cal;
        }
        // ...mapGetters(['num1'])
      },
      methods:{...mapMutations(['addmethod', 'reducemethod']),

        ...mapActions(['addAction']),
        one(one){
          alert(one);
        }
      } ,
      store
    }
</script>

<style scoped>

</style>
