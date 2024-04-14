// See https://kit.svelte.dev/docs/types#app

import type { Script } from "svelte/types/compiler/interfaces";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		const budgetingLessons = [
			{
			  title: "Discretionary Income",
			  lesson: "The amount of money left over after deducting taxes and necessary expenses, which can be spent on non-essential items or saved."
			},
			{
			  title: "Credit",
			  lesson: "The ability to borrow money or access goods and services with the understanding that repayment will be made at a later date, often with interest or fees."
			},
			{
			  title: "Taxes",
			  lesson: "Tax Deduction: A deduction that reduces the amount of taxable income, thereby lowering the tax liability. Tax Credit: A dollar-for-dollar reduction in the actual amount of tax owed. Taxable Income: The portion of income subject to taxation after accounting for deductions, exemptions, and credits."
			}
		  ];
		  
		  //console.log(budgetingLessons);

	}
}

export {};
