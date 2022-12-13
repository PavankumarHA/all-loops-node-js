///// if else types



// 1 type

let billing_sub_type = (penalty_type == 'wallet' || penalty_type == 'saver_money_plan')?penalty_type:'global_penalty';

//  this one print (penalty_type == 'wallet' || or this one print penalty_type == 'saver_money_plan') else default this on eprint ?penalty_type:'global_penalty'; ofter assign data to here let billing_sub_type 

// first checking this one (penalty_type == 'wallet' -- if data is there then this one print, if data is not there then go to next one  -- or  --|| penalty_type == 'saver_money_plan') this one check if data is there then print this one if data is not there then go to next one --  or -- then ?penalty_type:'global_penalty'; print this one defult if both data not there then print default this one  --   and asiign this one let billing_sub_type
