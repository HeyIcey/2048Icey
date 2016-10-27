// 2048游戏支撑逻辑
// 
 function getPosTop(i, j) {
	return 20 + i*120;
}

function getPosLeft(i, j){
	return 20 + j*120;
}

function getNumberBackgroundColor(number){
	switch(number){
		case 2: return "url(img/19.jpg)"; break;
		case 4: return "url(img/24.jpg"; break;
		case 8: return "url(img/3_140822153700_6.jpg)"; break;
		case 16: return "url(img/4b86161b6a3b4075896cee4f46260994.jpg)"; break;
		case 32: return "url(img/56471427330052.jpg)"; break;
		case 64: return "url(img/72931427330052.jpg)"; break;
		case 128:return "url(img/76941427330052.jpg)"; break;
		case 256:return "url(img/u=1814826180,120811790&fm=21&gp=0.jpg)"; break;
		case 512:  return "url(img/u=1914913583,751140247&fm=21&gp=0.jpg)"; break;
		case 1024: return "url(img/u=1922491179,3659187841&fm=21&gp=0.jpg)"; break;
		case 2048: return "url(img/u=3629850850,61518062&fm=21&gp=0 (1).jpg)"; break;
		case 4096: return "url(img/u=4231102329,592827369&fm=21&gp=0.jpg)"; break;
		case 8192: return "url(img/u=4231102329,592827369&fm=21&gp=0.jpg)"; break;
	}

	return "black"
}

function getNumberColor(number){
	if (number <= 4) {
		return "#776e65";
	}

	return "#fff";
}

function nospace(board){
	for(var i=0; i<4; i++){
		for(var j=0; j<4; j++){
			if (board[i][j] == 0) {
				return false;
			}
		}
	}
	return true;
}

function nomove(board){
	if(canMoveLeft(board)||
		canMoveRight(board)||
		canMoveUp(board)||
		canMoveDown(board)){
		return false;
	}
	return true;
}

function canMoveLeft(board){

	for(var i=0; i<4; i++){
		for(var j=1; j<4; j++){
			if (board[i][j] != 0){
				if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
	
}

function canMoveRight(board){
	for(var i=0; i<4; i++){
		for(var j=2; j>=0; j--){
			if (board[i][j] != 0) {
					if (board[i][j+1] == 0 || board[i][j+1] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveUp(board){
	for(var j=0; j<4; j++){
		for(var i=1; i<4; i++){
			if (board[i][j] != 0) {
					if (board[i-1][j] == 0 || board[i-1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveDown(board){
	for(var j=0; j<4; j++){
		for(var i=2; i>=0; i--){
			if (board[i][j] != 0) {
				if (board[i+1][j] == 0 || board[i+1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false
}


function noBlockHorizontalL(row, col1, col2, board){
	for(var j= col1+1; j<col2; j++){
		if (board[row][j] != 0) {
			return false;
		}
	}
	return true;
}

// function noBlockHorizontalR(row, col1, col2, board){
// 	for(var j = col2-1; j>col1; j-- ){
// 		if (board[row][j] != 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

function noBlockU(col, row1, row2, board){
	for(var i = row1+1; i<row2; i++){
		if(board[i][col] != 0){
			return false;
		}
	}
	return true;
}