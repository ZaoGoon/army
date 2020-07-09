<template>
	<div class="bd">
		<div class="map">
			<van-icon name="arrow-left" size="24" style="margin-top: 20px;margin-left: 20px;background-color: #C8C9CC;border-radius: 50%;" />
		</div>
		<div class="content">
			<van-row>
				<van-col span="10" style="font-weight: bold;font-size: 20px;margin-left: 100px;">商品已在路上<van-icon name="arrow" size="20" /></van-col>
			</van-row>
			<van-row>
				<van-col span="4" style="color: orange;font-weight: bold;font-size: 20px;margin-left: 100px;">12:35</van-col>
				<van-col span="8"><van-tag style="float: left;" type="warning" size="large">准时达</van-tag></van-col>
			</van-row>
			<van-row>
				<van-col span="14" style="margin-left: 70px;">订单配送中！感谢您的耐心等待！</van-col>
			</van-row>
			<van-row>
				<van-col span="18"><van-contact-card type="edit" name="爸爸" tel="13000000000" :editable="false" /></van-col>
				<van-col span="5"><p style="margin-top: 20px;float: left;">联系</p><van-icon style="float: left;margin-top: 20px;" name="phone-o" size="large" /></van-col>
			</van-row>
			
		</div>
		
		<div class="content2">
			<van-card style="margin-top: 40px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
			<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
			<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
			<van-row>
				<van-col span="10" style="margin-left: 20px; float: left;">配送费</van-col>
				<van-col span="2" style="margin-right: 10px;float: right;">￥0</van-col>
			</van-row>
			<van-row>
				<van-col span="10" style="margin-left: 20px; float: left;">优惠</van-col>
				<van-col span="4" style="margin-right: 4px;float: right;"><img style="width: 20px;height: 20px;float: left;" src="../img/红包.png" />￥-0</van-col>
			</van-row>
			<van-row>
				<van-col span="6" style="float: right;font-weight: bold;">总计￥8.88</van-col>
			</van-row>
		</div>
		
		<div class="content3">
			<van-row>
				<van-col span="8"><p style="font-weight: bold;">配送信息</p></van-col>
			</van-row>
			<van-row style="margin-top: 15px;">
				<van-col span="6">送达时间</van-col>
				<van-col span="6" style="float: right;">准时达12:35</van-col>
			</van-row>
			<van-row style="margin-top: 15px;">
				<van-col span="8">收货地址</van-col>
				<van-col span="16" style="float: right;">云南省昆明市宜良县匡远镇匡山小学</van-col>
			</van-row>
			<van-row>
				<van-col span="10" style="float: right;">杨(先生)186****9799</van-col>
			</van-row>
			<van-row style="margin-top: 15px;">
				<van-col span="8">配送方式</van-col>
				<van-col span="4" style="float: right;">准时达</van-col>
			</van-row>
		</div>
			
		<div class="content3">	
			<van-row style="margin-top: 20px;">
				<van-col span="8"><p style="font-weight: bold;">订单信息</p></van-col>
			</van-row>
			<van-row style="margin-top: 15px;">
				<van-col span="6">订单号</van-col>
				<van-col span="9" style="float: right;">6501251997110300</van-col>
			</van-row>
			<van-row style="margin-top: 15px;">
				<van-col span="8">下单时间</van-col>
				<van-col span="9" style="float: right;">2020-10-10&nbsp;10:35</van-col>
			</van-row>
			<van-row style="margin-top: 15px;">
				<van-col span="8">支付方式</van-col>
				<van-col span="4" style="float: right;">快捷支付</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
</script>

<style>
	body {
		width: 100%;
		margin: 0 auto;
		min-width: 320px;
		max-width: 640px;
		background: #fff;
		font-size: 14px;
		font-family: -apple-system, Helvetica, sans-serif;
		color: #666;
		line-height: 1.5;
		background-color: #F2F3F5;
	}

	* {
		margin: 0 0;
		padding: 0 0;
	}

	a {
		text-decoration: none;
	}

	ul li {
		list-style: none;
	}

	.bd {
		width: 100%;
	}

	.map {
		width: 100%;
		height: 300px;
		min-width: 320px;
		max-width: 640px;
		background-image: url(../img/map.png);
	}
	.content3{
		margin-top: 20px;
	}
</style>
