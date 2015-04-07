$(document).ready(function () {

/*----------------------------
  News saved 
----------------------------*/

	$('#newssave').click(function(){
		var titlename = $('#newstitle').val();
		var content = $('#newscontent').val();
		var imgfile = document.getElementById('imgpath').innerHTML;
//		alert(imgfile);
		if(titlename !="" & content !="" && imgfile!=""){
				$.post('./API/newsimport.php',{'newstitle':titlename,'newscontent':content,'image':imgfile},function(data){
					alert(data);
					t=data;
					jsonobj = eval('('+t+')');
					if(jsonobj.status==0){
						alert("Save successfully!");
					}else{
						alert("Save unsuccessfully!");
					}
				});
	  }else{
	  	alert("Any Fields cannot be blank!");
	  }
	});
	
	
/*----------------------------
  News img upload 
----------------------------*/
	
	$('#newsimg_submit').click(function(){
		if ($('#file').val() == '') {
			alert('Please choose a file!');
			return false;
		}
		else{
			$.post('./API/upload_file.php',function(data){
			alert('Upload sucessfully.');
				var t = data;
				var jsonobj = eval('('+t+')');	
//				alert(jsonobj.data);
				document.getElementById('imgpath').innerHTML=jsonobj.data;
			});	
		};
						
	});

	
})

