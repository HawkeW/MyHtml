<script>
	export default {
		onLaunch: function() {
		
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
* {
    margin: 0;
    -webkit-tap-highlight-color: transparent;
}
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.absolute {
  position: absolute;
}
.fixed{
    position: fixed;;
    }
  .font-bold {
      font-weight: 700;
  }
  .flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
  .text-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  }
  
</style>
