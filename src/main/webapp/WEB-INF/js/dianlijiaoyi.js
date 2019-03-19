function showskin() {
	//alert(123132);
	var oShow = document.getElementById('show');
	var tx1 = document.getElementById('showskin01');
	var tx2 = document.getElementById('showskin02');
	var tx3 = document.getElementById('showskin03');
	var tx4 = document.getElementById('showskin04');
	oShow.style.display = 'block';
	//var className=$('.greskin');
	//alert(className);
	var oCloseg =document.getElementById('showskin1');
	oCloseg.onclick = function() {
		oShow.style.display = 'none';
		tx1.style.display = 'block';
		if(tx1.style.display = 'block'){
			tx2.style.display = 'none';
			tx3.style.display = 'none';
			tx4.style.display = 'none';
		}
		ref('green');
	}
	var oClosey = document.getElementById('showskin2');
	oClosey.onclick = function() {
		oShow.style.display = 'none';
		tx2.style.display = 'block';
		if(tx2.style.display = 'block'){
			tx1.style.display = 'none';
			tx3.style.display = 'none';
			tx4.style.display = 'none';
		}
		ref('yellow');
	}
	var oCloser = document.getElementById('showskin3');
	oCloser.onclick = function() {
		oShow.style.display = 'none';
		tx3.style.display = 'block';
		if(tx3.style.display = 'block'){
			tx1.style.display = 'none';
			tx2.style.display = 'none';
			tx4.style.display = 'none';
		}
		ref('red');
	}
	var oCloser = document.getElementById('showskin4');
	oCloser.onclick = function() {
		oShow.style.display = 'none';
		tx4.style.display = 'block';
		if(tx4.style.display = 'block'){
			tx1.style.display = 'none';
			tx2.style.display = 'none';
			tx3.style.display = 'none';
		}
		ref('yellow');
	}
	
}
function ref(skin){
	alert(skin);
	$.ajax({
		url : '../UserSkinServlet?flag=0 & skin='+skin,
		type : 'post',
		dataType : 'text',
		success : function() {
			window.location.href = "index.jsp";
		}
	});
}