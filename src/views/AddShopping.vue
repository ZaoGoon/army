<template>
	<div class="AddShopping">
		<div class="hop">
			<div class="hop_r">
				<van-icon name="arrow-left" />
				<van-icon style="position: absolute;right: 2rem;" name="shopping-cart-o" badge="3" />
			</div>
		</div>
		<div class="bot">
			<van-card  price="26.00/份" desc="比水果店性价比还高!味甜/易剥还新鲜!" title="广东四会砂糖橘 约2斤装" />
			<p style="color: silver;font-size: 16px;float: left;padding-top: 30px;padding-right: 10px;padding-left: 10px;">送至</p>
			<p style="color: black;font-size: 16pxpx;float: left;padding-top: 30px;padding-right: 10px;">北京海淀区中关村SHOH大厦16层1006</p>
			<p style="color: silver;font-size: 30px;float: left;padding-top: 2px;">...</p>
			<p style="color: black;font-size: 14px;padding-left: 50px;position: absolute;bottom: 40px;">现在下单 最快今天19:45前送达</p>
			<p style="color: red;font-size: 14px;padding-left: 20px;position: absolute;bottom: 40px;right: 50px;">支持自提</p>
		<div class="bot_ip">
			<van-button  type="default">加入购物车</van-button>
		</div>
		</div>
	</div>
</template>
<style>
	.hop {
		width: 100%;
		height: 500px;
		background-image: url(../img/22.jpg);
	}

	.hop_r {
		width: 95%;
		margin: 0 auto;
	}

	.hop_r .van-icon {
		font-size: 30px;
		color: white;
	}

	.bot {
		width: 99%;
		height: 300px;
		border: black solid 1px;
		border-radius: 20px 20px 0px 0px;
	}
	.bot .van-card__desc{
		font-size: 14px;
		padding-top: 10px;
	}

	.bot .van-card__price {
		padding-top:10px ;
		position: absolute;
		top: 4rem;
		left: 0.1rem;
	}
	.bot .van-card__title{
		font-size: 18px;
		font-weight: bold;
		padding-top: 20px;
	}
	.bot_ip{
		width: 95%;
		height: 65px;
		margin: 0 auto;
	}
	.bot_ip .van-button{
		background: red;
		color: white;
		width: 100%;
		margin-top: 10px;
		border-radius: 30px;
		font-size: 18px;
		height: 60px;
	}
</style>
<script>

</script>
