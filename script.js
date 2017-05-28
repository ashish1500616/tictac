var arr = [
     [null, null, null],
     [null, null, null],
     [null, null, null],
];
console.log("Script called");
display();

var op = "",
   ops = "O",
   sym = "X",
   c = 0,
   r = 0,
   tr = 0,
   tl = 0,
   temp = 2,
   count = 0;


function display()
{
   for(var i = 0; i < 3; i++)
   {
      for(var j = 0; j < 3; j++)
      {
         console.log("value at ", i, j, ':', arr[i][j]);
      }
   }
}


function getSymbol(data)
{
   sym = data;
   $("#turn").html(sym);
   if(sym === 'X')
      ops = 'O';
   else
      ops = 'X';
   console.log("you selected and ops:", sym, ops);
}

function getOpponent(data)
{
   var op = data;
   if(op === "person")
   {
      //console.log("Calling showDiv");
      showDiv();
   }
   else
   {
      showDivCom();
   }
}





function scores(data)
{}

/*function check(data)
{
   console.log('Inside check Function');
   console.log("val of data:", data);
   tr = 0, tl = 0, c = 0;
   for(var i = 0; i < 3; i++)
   {
      r = 0, c = 0;
      for(var j = 0; j < 3; j++)
      {
         // to check row. . .
         if(arr[i][j] === data)
         {
            r++;
         }
         else if(arr[j][i] === data)
         {
            console.log("index : :", i, j);
            c++;
         }
         else if(i === j && arr[i][j] === data)
         {
            tr++;
         }
         else if(arr[i][temp] === data)
         {
            tl++;
            --temp;
         }
      }
      console.log("val of c:", c);
      console.log("val of R:", r);
      console.log("val of tr:", tr);
      console.log("val of tl:", tl);
      if(c == 3 || r === 3 || tr === 3 || tl === 3)
      {
         return 1;
      }
   }
}*/

function checkRows()
{
   for(var i = 0; i < 3; i++)
   {
      if(arr[i][0] == arr[i][1] &&
         arr[i][1] == arr[i][2] &&
         arr[i][0] !== null)
      {
        $("#result").html(arr[i][0] + "   Wins");
         return(true);
      }
   }
   return(false);
}

function checkCol()
{
   for(var i = 0; i < 3; i++)
   {
      console.log("in colum", i);
      if(arr[0][i] === arr[1][i] &&
         arr[1][i] === arr[2][i] &&
         arr[0][i] !== null)
      {
       $("#result").html(arr[0][i] + "   Wins The Game.");
         return(true);
      }
   }
   return(false);
}

function diagonal()
{
   if(arr[0][0] == arr[1][1] &&
      arr[1][1] == arr[2][2] &&
      arr[0][0] !== null)
   {
      $("#result").html(arr[0][0] + "   Wins The Game.");
      //alert();
      return(true);
   }

   if(arr[0][2] == arr[1][1] &&
      arr[1][1] == arr[2][0] &&
      arr[0][2] !== null)
   {
     $("#result").html(arr[0][2] + "   Wins The Game.");
      return(true);
   }

   return(false);
}



function counter()
{
   count++;
}


function pass()
{
   if(count >= 5)
   {
      //console.log("cr:", checkRows());
      //console.log("cc:", checkCol());
      //console.log("cr:", diagonal());
      if(!checkRows() && !checkCol() && !diagonal())
      {
         /*if(data === 'O' && checkRows(data)  || checkCol(data) || diagonal(data))
         {
            alert("O Full");
         }
         else if(data === 'X' && checkRows(data) == 1 || checkCol(data) || diagonal(data))
         {
            alert('X full');
         }*/
         /*if(checkRows() || checkCol() || diagonal())
         {
            //alert("Match");
            return;
            //trig();
         }*/
         if(count === 9)
         {
            alert("Match draw");
         }
      }
   }

}

function initNewGame()
{
   // setup game vars and cards
   //location.reload();
   /* .ajax(
    {
       ...
       success: function ()
       {
          $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').html(' ');
          for(var i = 0; i < 3; i++)
          {
             for(var j = 0; j < 3; j++)
             {
                console.log("value at ", i, j, ':', arr[i][j]);
             }
          }..
       }
       trig();
    });*/
}

function endGame()
{
   // clean game vars and remove cards
   // alert('Starting new game');
}

function newOrReset()
{
   endGame();
   initNewGame();
}

function displayTurn()
{
   if(count % 2 == 0)
   {
      $("#turn").html(sym);
   }
   else
   {
      $("#turn").html(ops);
   }
}
