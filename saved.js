lightCycle.unshift(front); //add to the front of the lightCycle array
for (let i = 1; i < lightCycle.length; i++) {
    lightCycle[i].x = lightCycle[i - 1].x;//adding to the rest of the array
    lightCycle[i].y = lightCycle[i - 1].y;
    lightCycle[i].size = 5;
    lightCycle[i].velocity = 10;



}
lightCycle.push(back);
