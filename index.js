//Global variables
{
  var player;
  
  var startingX = 30;
  var startingY = 350;
  
  var totalLevels = 7;
  
  var blocks = Create2DArray(totalLevels);
  var doors = Create2DArray(totalLevels);
  var keys = Create2DArray(totalLevels);
  var movers = Create2DArray(totalLevels);
  var triggers = Create2DArray(totalLevels);
  var triggerBlocks = Create2DArray(totalLevels);
  }
  
  /*  For map editing: 0 = nothing        1 = block           2 = door
                       3 = key            4 = movableBlock    5 = trigger
                       6 = triggerBlock
  */
  
  //A 3D array to contain all of the maps, each of them being 2D arrays.
  var map =
  [   //Default
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1],
          [1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1],
          [1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],
          [1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],
          [1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],
          [1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
          [1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1],
          [1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1],
          [1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1],
          [1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1],
          [1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1],
          [1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 1
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1],
          [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 2
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,1],
          [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
          [1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1],
          [1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
          [1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1],
          [1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1],
          [1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1],
          [1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,1,0,2,0,1,1,1,0,0,0,0,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 3
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
          [1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
          [1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
          [1,0,0,0,3,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1],
          [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
          [1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
          [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
          [1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,6,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,6,0,2,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,1,1,0,0,6,0,0,0,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 4
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1],
          [1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,0,0,0,0,1,1,1,0,0,0,6,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,0,0,1,1,1,1,1,0,2,0,6,0,0,0,0,0,0,0,0,0,1,1,1],
          [1,0,0,0,1,1,1,1,1,0,0,0,6,0,0,0,5,1,0,0,4,0,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 5
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,1],
          [1,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
          [1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1],
          [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1],
          [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1],
          [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,1,0,0,0,0,4,0,0,0,0,0,0,1,1,1,1],
          [1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1],
          [1,0,0,0,0,6,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1],
          [1,0,0,0,0,6,0,2,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1],
          [1,1,1,0,0,6,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 6
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,1],
          [1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
          [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
          [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,1,0,0,0,0,4,5,1,0,0,0,0,1,0,0,0,0,0,0,0,1],
          [1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1],
          [1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1],
          [1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,3,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      //Map 7
      [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,4,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,0,1],
          [1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1],
          [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1],
          [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1],
          [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
          [1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
          [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,0,0,1,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,0,6,0,2,0,6,0,0,0,0,0,1,0,3,0,1],
          [1,0,0,0,0,0,0,0,0,0,6,0,0,0,6,5,0,0,0,0,1,0,0,0,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ]
      
  ];
  
  //Object used to create the game area and clear it.
  var GameArea = {
      canvas : document.createElement("canvas"),
      //Function used to create the canvas area and initialize keyboard controls
      start : function() {
          this.canvas.width = 500;
          this.canvas.height = 400;
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          this.interval = setInterval(UpdateGame, 20);
          
          window.addEventListener('keydown', function (e) {
              GameArea.keys = (GameArea.keys || []);
              GameArea.keys[e.keyCode] = (e.type == "keydown");
          }),
          window.addEventListener('keyup', function (e) {
              GameArea.keys[e.keyCode] = (e.type == "keydown");            
          });
      }, 
      clear : function(){
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
  };
  
  //Classes
  {
  //Player class.
  function Player(width, height, color, x, y) {
      this.gamearea = GameArea;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.onBlock = -1;
      this.ground = GameArea.canvas.height;
      this.gravity = 1;
      this.IsGrounded = false;
      
      this.GotKey = false;
      this.CurrentLevel = 1;
      
      //All of the classes use a draw function using the canvas from GameArea.
      this.Draw = function() {
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.Update = function() {  
          if(player.CurrentLevel > totalLevels){
              player.CurrentLevel = 0;
          }
          if(player.CurrentLevel < 0){
              player.CurrentLevel = 0;
          }
          
          this.y += this.gravity;
          
          //Collision detection
          if(this.x <= 0){
              this.x = 0;
          }
          if(this.x >= GameArea.canvas.width - this.width){
              this.x = GameArea.canvas.width - this.width;
          }
          if(this.y <= 0){
              this.y = 0;
          }
          if(this.y >= this.ground - this.height){
              this.y = this.ground - this.height;
              this.gravity = 0;
              this.IsGrounded = true;
          }
          else{
              this.IsGrounded = false;
              this.gravity += .9;
          }
      };  
  }
  
  //Block class.
  function Block(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.Draw = function(){
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.CheckCollision = function(obj, place) {
          if((obj.x >= this.x - obj.width ) && (obj.x < this.x) && (Math.abs(obj.y - this.y) < this.height)) {
              obj.x = this.x - obj.width;
          }
          if((obj.x <= this.x + this.width ) && (obj.x > this.x) && (Math.abs(obj.y - this.y) < this.height)) {
              obj.x = this.x + this.width;
          }
          if((obj.y < this.y + this.height - obj.gravity) && (obj.y > this.y) && (Math.abs(obj.x - this.x) < this.width-3)) {
              obj.gravity = 0;
              obj.y = this.y + this.height;
          }
          if((obj.ground > this.y - obj.height) && (obj.y < this.y) && (Math.abs(obj.x - this.x) < this.width) && obj.onBlock != place) {
              obj.ground = this.y;
              obj.onBlock = place;
          }
          if((Math.abs(obj.x - this.x) > this.width) && obj.onBlock == place) {
              obj.onBlock = -1;
              obj.ground = GameArea.canvas.height;
          }
      };
  }
  
  //Door class.
  function Door(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.Draw = function(){
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.CheckCollision = function(obj){
          if((obj.x > this.x - obj.width ) && (obj.x < this.x) && (Math.abs(obj.y - this.y) < this.height / 2) && obj.GotKey) {
              obj.CurrentLevel++;
              obj.x = startingX;
              obj.y = startingY;
              obj.GotKey = false;
          }
          if((obj.x < this.x + this.width ) && (obj.x > this.x) && (Math.abs(obj.y - this.y) < this.height / 2) && obj.GotKey){
              obj.CurrentLevel++;
              obj.x = startingX;
              obj.y = startingY;
              obj.GotKey = false;
          }
          
          if((obj.y < this.y + this.height) && (obj.y > this.y) && (Math.abs(obj.x - this.x) < this.width) && obj.GotKey){
              obj.CurrentLevel++;
              obj.x = startingX;
              obj.y = startingY;
              obj.GotKey = false;
          }
          if((obj.y > this.y - obj.height) && (obj.y < this.y) && (Math.abs(obj.x - this.x) < this.width) && obj.GotKey){
              obj.CurrentLevel++;
              obj.x = startingX;
              obj.y = startingY;
              obj.GotKey = false;
          }
      };
  }
  
  //Key class.
  function Key(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.Draw = function(){
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.CheckCollision = function(obj){
          if((obj.x > this.x - obj.width ) && (obj.x < this.x) && (Math.abs(obj.y - this.y) < this.height / 2)){
              obj.GotKey = true;
          }
          if((obj.x < this.x + this.width ) && (obj.x > this.x) && (Math.abs(obj.y - this.y) < this.height / 2)){
              obj.GotKey = true;
          }
          
          if((obj.y < this.y + this.height) && (obj.y > this.y) && (Math.abs(obj.x - this.x) < this.width)){
              obj.GotKey = true;
          }
          if((obj.y > this.y - obj.height) && (obj.y < this.y) && (Math.abs(obj.x - this.x) < this.width)){
              obj.GotKey = true;
          }
      };
  }
  
  //MovableBlock class.
  function MovableBlock(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.CanMove = true;
      
      this.onBlock = -1;
      this.ground = GameArea.canvas.height;
      this.gravity = 1;
      this.IsGrounded = false;
      
      this.Draw = function(){
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.Update = function(){
          this.y += this.gravity * .5;
          
          if(this.y >= this.ground - this.height){
              this.y = this.ground - this.height;
              this.gravity = 0;
              this.IsGrounded = true;
          }
          else{
              this.IsGrounded = false;
              this.gravity++;
          }
      };
      this.CheckCollision = function(objA, place){
          //Player Collisions.
          if((objA.x >= this.x - objA.width ) && (objA.x < this.x) && (Math.abs(objA.y - this.y) < this.height / 2)){
              objA.x = this.x - objA.width;
              if(this.CanMove){   
                  this.x = this.x + 2;
              }
          }
          if((objA.x <= this.x + this.width ) && (objA.x > this.x) && (Math.abs(objA.y - this.y) < this.height / 2)){
              objA.x = this.x + this.width;
              if(this.CanMove){
                  this.x = this.x - 2;
              }
          }
          
          if((objA.y < this.y + this.height) && (objA.y > this.y) && (Math.abs(objA.x - this.x) < this.width)){
              objA.gravity = 0;
              objA.y = this.y + this.height;
          }
          if((objA.ground > this.y - objA.height) && (objA.y < this.y) && (Math.abs(objA.x - this.x) < this.width) && objA.onBlock != place){
              objA.ground = this.y;
              objA.onBlock = place;
          }
          if((Math.abs(objA.x - this.x) > this.width) && objA.onBlock == place){
              objA.onBlock = -1;
              objA.ground = GameArea.canvas.height;
          }
          
          
      };
      this.CheckCollisions = function(objB, objC, place){
          //Block Collisions.
          if((objB.x >= this.x - objB.width ) && (objB.x < this.x) && (Math.abs(objB.y - this.y) < this.height / 2)){
              this.CanMove = false;
          }
          if((objB.x <= this.x + this.width ) && (objB.x > this.x) && (Math.abs(objB.y - this.y) < this.height / 2)){
              this.CanMove = false;
          }
          
          //TriggerBlock Collisions.
          if((objC.x >= this.x - objC.width ) && (objC.x < this.x) && (Math.abs(objC.y - this.y) < this.height / 2)){
              this.CanMove = false;
          }
          if((objC.x <= this.x + this.width ) && (objC.x > this.x) && (Math.abs(objC.y - this.y) < this.height / 2)){
              this.CanMove = false;
          }
      };
  }
  
  //Trigger class.
  function Trigger(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y + 15;
      
      this.IsTriggered = false;
      
      this.Draw = function(){
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.CheckCollision = function(obj, place){
          if((obj.y < this.y + this.height) && (obj.y > this.y) && (Math.abs(obj.x - this.x) < this.width)){
              obj.gravity = 0;
              obj.y = this.y + this.height;
          }
          if((obj.y > this.y - obj.height) && (obj.y < this.y) && (Math.abs(obj.x - this.x) < this.width) && obj.onBlock != place){
              obj.ground = this.y;
              obj.onBlock = place;
              this.y += 500;
              this.IsTriggered = true;
          }
          if((Math.abs(obj.x - this.x) > this.width) && obj.onBlock == place){
              obj.onBlock = -1;
              obj.ground = GameArea.canvas.height;
          }
      };
  }
  
  //TriggerBlock class.
  function TriggerBlock(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.Draw = function(){
          ctx = GameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.Update = function(obj){
          if(obj.IsTriggered){
              this.y += 5;
          }
          if(this.y > y + 500){
              this.y = y + 500;
          }
      };
      this.CheckCollision = function(obj, place){
          if((obj.x >= this.x - obj.width ) && (obj.x < this.x) && (Math.abs(obj.y - this.y) < this.height / 2)){
              obj.x = this.x - obj.width;
          }
          if((obj.x <= this.x + this.width ) && (obj.x > this.x) && (Math.abs(obj.y - this.y) < this.height / 2)){
              obj.x = this.x + this.width;
          }
          
          if((obj.y < this.y + this.height) && (obj.y > this.y) && (Math.abs(obj.x - this.x) < this.width)){
              obj.gravity = 0;
              obj.y = this.y + this.height;
          }
          if((obj.ground > this.y - obj.height) && (obj.y < this.y) && (Math.abs(obj.x - this.x) < this.width) && obj.onBlock != place){
              obj.ground = this.y;
              obj.onBlock = place;
          }
          if((Math.abs(obj.x - this.x) > this.width) && obj.onBlock == place){
              obj.onBlock = -1;
              obj.ground = GameArea.canvas.height;
          }
      };
  }
  }
  
  //Because Javascript doesn't naturally make 2D arrays, a function was made for it.
  function Create2DArray(rows) {
      var array = [];
      for(var i = 0; i <= rows; i++){
          array[i] = [];
      }
      return array;
  }
  
  //Used to prevent the screen from moving up, down, left or right when you press an arrow.
  function DisableScrolling() {
      window.addEventListener("keydown", function(e) {
          if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)  {
              e.preventDefault();
          }
      }, false);
  }
  
  //Used to prepare the game.
  function StartGame() {
      
      GameArea.start();
      DisableScrolling();
      
      player = new Player(20, 20, "#e10000", startingX, startingY);
      
      //A loop to process every level.
      for(var i = 0; i <= totalLevels; i++) {
          ProcessLevel(i);
      }
  }
  
  //Used as the main location where things are updated.
  function UpdateGame() {
      //Cleans the board every frame.
      GameArea.clear();
      
      //All key controls.
      if (GameArea.keys && GameArea.keys[37]) {player.x += -3; }
      if (GameArea.keys && GameArea.keys[39]) {player.x += 3; }
      if (GameArea.keys && (GameArea.keys[38] || GameArea.keys[32]) && player.IsGrounded){player.gravity = -12;}
      if (GameArea.keys && GameArea.keys[13]) {ResetLevel(player.CurrentLevel);}
    
    LoadLevel(player.CurrentLevel);
      player.Draw();
      player.Update();  
  }
  
  //Used to draw all objects on the level.
  function ProcessLevel(level) {
      //Loops through a single map's array and draws the object based off what number is in the array.
      //It then adds that object to an array of that particular object.
      for(var i = 0; i < map[level].length; i++){
          for(var j = 0; j < map[level][i].length; j++){
              if(map[level][i][j] == 1){
                  var block = new Block(20, 20, "#320064", j*20, i*20);
                  blocks[level].push(block);
              }
              if(map[level][i][j] == 2){
                  var door = new Door(20, 40, "#e16400", j*20, i*20);
                  doors[level].push(door);
              }
              if(map[level][i][j] == 3){
                  var key = new Key(20, 20, "#e1c100", j*20, i*20);
                  keys[level].push(key);
              }
              if(map[level][i][j] == 4){
                  var mover = new MovableBlock(20, 20, "#006400", j*20, i*20);
                  movers[level].push(mover);
              }
              if(map[level][i][j] == 5){
                  var trigger = new Trigger(20, 5, "#0000c1", j*20, i*20);
                  triggers[level].push(trigger);
              }
              if(map[level][i][j] == 6){
                  var triggerBlock = new TriggerBlock(20, 20, "#320096", j*20, i*20);
                  triggerBlocks[level].push(triggerBlock);
              }
          }
      }
  }
  
  //Used to change between levels and play them.
  function LoadLevel(level){
      for(var i = 0; i < blocks[level].length; i++){
          blocks[level][i].Draw();
          blocks[level][i].CheckCollision(player, i);
      }
      for(var i = 0; i < triggers[level].length; i++){
          triggers[level][i].Draw(); 
          for(var j = 0; j < movers[level].length; j++){
              triggers[level][i].CheckCollision(movers[level][j], i);
          }
      }
      for(var i = 0; i < triggerBlocks[level].length; i++){
          triggerBlocks[level][i].Draw();
          triggerBlocks[level][i].CheckCollision(player, i);
          for(var j = 0; j < triggers[level].length; j++){
              triggerBlocks[level][i].Update(triggers[level][j]);
          }
      }
      for(var i = 0; i < movers[level].length; i++){
          movers[level][i].Draw();
          movers[level][i].Update();
          movers[level][i].CheckCollision(player, i);
          for(var j = 0; j < blocks[level].length; j++){
              blocks[level][j].CheckCollision(movers[level][i], j);
              for(var k = 0; k < triggerBlocks[level].length; k++){
                  movers[level][i].CheckCollisions(blocks[level][j], triggerBlocks[level][k], i);
                  triggerBlocks[level][k].CheckCollision(movers[level][i], k);
              }
          }
      }
      
    //Checks if the player has obtained the key.
    if(!player.GotKey){
          for(var i = 0; i < keys[level].length; i++){
              keys[level][i].Draw();
              keys[level][i].CheckCollision(player);
          }
    }
    else{
          for(var i = 0; i < keys[level].length; i++){
            delete keys[level][i];
          }
    }
    
      for(var i = 0; i < doors[level].length; i++){
          doors[level][i].Draw();
          doors[level][i].CheckCollision(player);
      }
  }
  
  //Used to restart the level you are playing on.
  function ResetLevel(level){
      player.x = startingX;
      player.y = startingY;
      player.GotKey = false;
      
      for(i = 0; i < blocks[level].length; i++) {blocks[level].splice(0,i);}
      for(i = 0; i < doors[level].length; i++) {doors[level].splice(0,i);}
      for(i = 0; i < keys[level].length; i++) {keys[level].splice(0,i);}
      for(i = 0; i < movers[level].length; i++) {movers[level].splice(0,i);}
      for(i = 0; i < triggers[level].length; i++) {triggers[level].splice(0,i);}
      for(i = 0; i < triggerBlocks[level].length; i++) {triggerBlocks[level].splice(0,i);}
      ProcessLevel(level);
  }
  Footer
  