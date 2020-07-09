<template>
	<div class="ordercpl">
		<div class="header">
			<div class="header_r">
				<van-nav-bar left-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
			</div>
			<div class="header_tx">
				<p style="font-size: 17px;color: white;">订单已完成
					<van-icon name="arrow" />
				</p>
				<p style="font-size: 12px;color: white;">感谢你的支持与信任，期待您的再次光临</p>
			</div>
		</div>
		<div class="ps">
			<van-card num="1" price="12.5" desc="规格:500g/份" title="湖南麻阳冰糖橙*6 约500g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
			<van-card num="2" price="25" desc="规格:1kg/份" title="台湾牛奶蜜枣*6 约2斤" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
			<van-card num="2" price="80" desc="规格:500g/份" title="智利JJ级蕾妮Rainier黄金车厘子..." thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
		</div>
		<div class="ps_f">
			<van-cell-group>
				<van-cell title="配送费" value="¥ 0" />
				<van-cell title="优惠" value="¥ - 10" />
				<p style="text-align: right; margin-right: 10px; font-weight: bold;">总计:¥132.50</p>
			</van-cell-group>
		</div>
		<div class="psxx">
			<p style="font-size: 18px;font-weight: bold;margin-left: 10px;">配送信息</p>
			<van-cell title="送达时间" value="准时达 12:18" />
			<p style="float: left;font-size: 14px;margin-left:16px ;">收货地址</p>
			<p style="float: right;font-size: 14px;margin-right: 16px;">海淀北二街8号中关村SHOH大厦26号</p>
			<p style="text-align: right;font-size: 14px;position: absolute;bottom: -35px;left: 200px;">小李子(先生) 1552****662</p>
			<van-cell title="配送方式" value="准时达" />
		</div>
		<div class="ddxx">
			<p style="font-size: 18px;font-weight: bold;margin-left: 10px;">订单信息</p>
			<van-cell title="订单号" value="660201810263009168" />
			<van-cell title="下单时间" value="2018-01-26 10:21" />
			<van-cell title="支付方式" value="快捷支付" />
		</div>
	</div>
</template>
<style>
	.header {
		width: 100%;
		height: 150px;
		background: salmon;
	}

	.header_tx {
		text-align: center;
	}

	.header_r .van-nav-bar {
		background-color: salmon;
	}

	.van-card__price {
		position: absolute;
		top: -0.1rem;
		left: 13rem;
	}

	.van-card__num {
		position: absolute;
		top: 1rem;
		left: 14rem;
	}

	.ps_f .van-cell__value {
		color: black;
	}

	.ps {
		width: 100%;
	}

	.ps_f {
		width: 100%;
		height: 135px;
		border-bottom: silver solid 0.5px;
	}

	.psxx {
		width: 100%;
		height: 150px;
		margin-bottom: 50px;
		/* background: #1989FA; */
	}

	.psxx .van-cell__value {
		color: black;
	}

	.psxx .van-cell {
		line-height: 30px;
	}

	.ddxx {
		width: 100%;
		height: 200px;
	}

	.ddxx .van-cell__title {
		color: #969799;
	}

	.ddxx .van-cell__value {
		color: #323233;
	}
</style>
<script>
	import {
		Toast
	} from 'vant';

	export default {
		methods: {
			onClickLeft() {
				Toast('my.vue');
			},
			// onClickRight() {
			// 	Toast('按钮');
			// },
		},
	};
</script>
