var toSum = function(nums,target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i; j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                if(i!=j){
                    return [i,j]
                }
            }
        }
    }
}

//optimized
const twoSum = function(nums,target){//[2,3,4,5,6] sum:11                               
    let hash={};                                                                    //hash table to store the values and their indices
    for(let i=0;i<nums.length;i++){                                                 //iterate through the array
        let diff = target - nums[i]; //11-2:9;11-3:8;11-4:7;11-5:7;11-6:5             find the difference between the target and the current value
        if(hash[diff]!==undefined){  //false; false; false; false; true               if the difference is in the hash table
            return [hash[diff],i];   //skip;  skip;  skip;  skip; [hash[5],4]         return the indices of the two values
        }
        hash[nums[i]] = i;           //[2];  [3];  [4];  [5];  [6]                    add the current value to the hash table
    }
}

// Time complexity O(n) : Iterating through the array once.

// Space complexity O(n) : As Storing the values in the hash table.