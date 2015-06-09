
/*eslint-env jquery, browser*/
$( document ).ready( function( $ ) {
	
	$('#submit').on('click', function(){	
		var exiting = false;
		$('input').each( function(){
			if(!$.trim($(this).val())){
				$(this).addClass('missing');
				exiting = true;
			}else
				$(this).removeClass('missing');
		});
		if(!exiting){
			var name	= "<b>"+$('#name').val()+"</b>";
			var adj 	= "<b>"+$('#adj').val()+"</b>";
			var occ 	= "<b>"+$('#occ').val()+"</b>";
			var obj 	= "<b>"+$('#obj').val()+"</b>";
			var verb 	= "<b>"+$('#verb').val()+"</b>";
			
			$('#content').html(
				"Here's your awesome story:<br><br>"+
				"<p class=\"text\">Once upon a time, a popular "+adj+" "+occ+" by the name of "+ name +" made the most wonderful item of his craft, "+
				"an object so revolutionary their colleages and world marveled at its brilliance: a small "+ obj +". This item changed the world, "+
				"everyone used the "+ obj +" non-stop, they would use it to " + verb + " in every situation. Soon aliens "+
				"discovered the world and found one of these "+obj+"s and cursed "+name+" for the ingenuity of the item saying \"Why didn't we think of that?\"</p>"+
				'<a href=""><< Do it again!</a>'
			);
		}
		
	});
});