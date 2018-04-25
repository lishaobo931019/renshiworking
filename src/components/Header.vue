<template>
	<div id="">
		
		<div id="logo">
			航凯电力
		</div>
		
		  	
	</div>
</template>

<script>
	export default{
		name:'Header',
		data(){
			return{
				input:"",
				chuxian:false
			}
		},
		methods:{
			sousuo:function(){
				this.chuxian = true;
//				if(this.chuxian){
//					this.chuxian =false
//				}
			}
		}
	}
</script>

<style>
	#logo{
		display: inline-block;float:left
	}

</style>