<script setup>
import { ref, reactive } from 'vue'

const pccolors = ref([[100, 'Fixed Cost'], [0, 'Investment'], [0, 'Savings']]);
const future_pay = ref([["car", 2, 20, 1], ["vacation", 3, 100, 2], ["shopping", 4, 80, 3], ["house", 6, 160, 4]]);
// name, days left, percent, position in pccolors

const score = ref(0)
const nxtcolor = ref(["red", "green", "blue", "pink", "orange", "purple", "yellow"])
const piechartcolors = ref([]);

alert("Instructions:\n\nIn this game, you start with a budget that you must manage. Throughout the years, you will have loan payments that you must pay off. Once the payments are due, the remaining money is deducted from your budget. However, you can use the buttons at the start to pay off part of the loans with leftover money.\n\nInvesting takes away part of your money for some time, but the longer you wait, the more money is rewarded to you later. Investing also involves taxes if you cash out too quickly.\n\nYou gain money by having the most money left in your savings and lasting as long as possible.\n\nTry to last as long as possible. Good luck!");
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

list2chart();
function list2chart() {
	if(pccolors.value.length == 0) return;
	var ci = 0;
	var fin = nxtcolor.value[ci] + " " + pccolors.value[0][0] + "deg"
	ci++; ci %= nxtcolor.value.length;
	var curr = pccolors.value[0][0]
	for(var i = 1; i < pccolors.value.length-1; i++) {
		curr += pccolors.value[i][0]
		fin = fin + ", " + nxtcolor.value[ci] + " 0 " + curr + "deg"
		ci++; ci %= nxtcolor.value.length;
	}
	if(curr >= 360) {
		alert("Check the Lessons site about tips and tricks for finance\nThen come back here and try again\nFrom you performance you need more work on managing loans and how to budget")
		window.location.reload();
	}
	fin = fin + ", white 0"
	ci++; ci %= nxtcolor.value.length;

	piechartcolors.value = fin
}

function addcolor(size, name) {
	pccolors.value.splice(pccolors.value.length-1, 0, [size, name])
	list2chart();
}

function change_pcc_size(index, diff) {
	if(pccolors.value[pccolors.value.length-3][0]+diff >= 360) return;
	if(index == pccolors.value.length-1) {
		pccolors.value[index-1][0] -= diff;
	} else {
		pccolors.value[index][0] += diff;
	}
	list2chart()
}

function savingsnum() {
	var curr = pccolors.value[0][0]
	for(var i = 1; i < pccolors.value.length-1; i++) {
		curr += pccolors.value[i][0]
	}
	return 360-curr
}

for(var i = 0; i < future_pay.value.length; i++) {
	addcolor(0, future_pay.value[i][0]);
}
const invest_time = ref(0)
function nextyear() {
	invest_time.value++;
	for(var j=0; j<future_pay.value.length; j++) {
		future_pay.value[j][2] -= pccolors.value[future_pay.value[j][3]][0]
		if(future_pay.value[j][2] < 0) future_pay.value[j][2] = 0
		future_pay.value[j][2] = (1.1*future_pay.value[j][2]) | 0
		change_pcc_size(future_pay.value[j][3], -pccolors.value[future_pay.value[j][3]][0])
	}
	console.log(pccolors.value)
	list2chart()

//	const curr = pccolors.value[pccolors.value.length-2][1]
	for(var i = 0; i < future_pay.value.length; i++) {
		future_pay.value[i][1]--;
		if(future_pay.value[i][1] == 0) {
			addcolor(future_pay.value[i][2], future_pay.value[i][0]);
			future_pay.value.splice(i,i+1)
			i--;
		} else {
		}
	}
	change_pcc_size(0, 10)

//	list2chart()
	console.log(pccolors.value)
//	console.log(piechartcolors.value)
//	console.log(future_pay.value)

	score.value += savingsnum()
}

const invest_amt = ref(0)
const newinvest = ref(10)
function add_invest() {
	if(((savingsnum()/2)|0) < invest_amt.value) invest_amt.value = (savingsnum()/2)|0
	invest_amt.value += newinvest.value
	newinvest.value = 10
	pccolors.value[pccolors.value.length-2][0] = invest_amt.value
	list2chart()
}

function cashout() {
	console.log(invest_time.value*invest_amt.value)
	change_pcc_size(0, -(invest_time.value*invest_amt.value))
	invest_amt.value = 0
	invest_time.value = 0
	pccolors.value[pccolors.value.length-2][0] = 0
	list2chart()
}
</script>

<template>
	<h1 class="header">Financial Calculator</h1><hr><br>
	<div class="cols">
		<div class="calculator">
			<h2>Score: {{ score }}</h2> <br>
			<div class="piechart"></div> <br>
			<button @click="nextyear">new year</button>
			<div v-for="(item, index) in future_pay">
				<button @click="change_pcc_size(item[3], 5)">{{ capitalize(item[0]) }} - 5%</button>
			</div>
		</div>

		<div class="info">
			<h1 class="payment-header">Future Payments</h1>
			<div v-for="(item, index) in future_pay">
				<p>Payment Type: {{ capitalize(item[0]) }}<br>Years Left Until Due: {{ item[1] }}<br>Price: {{ item[2]
					}}</p>
				<br>
			</div>
			<br>
			<h2>Invest</h2>
			Amount currently invested: ${{ invest_amt }} <br>
			Invested for (longer is better): {{ invest_time }} years<br>
			<input v-model.number="newinvest" />%
			<br>
			<button @click="add_invest">Invest</button>
			<button style="margin-left: 10px;" @click="cashout">Cash Out</button>
		</div>
	</div>
</template>

<style scoped>
.piechart {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-image: conic-gradient(v-bind(piechartcolors));
}
</style>