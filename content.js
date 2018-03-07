var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var target = document.querySelector('#jira');             

var annoyingThings = ['harvest__toggle-timer', 'zendesk_for_jira__issue-panel']; 

// create an observer instance
var observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
		if(mutation.target.id == 'viewissuesidebar') {
			for (let child of mutation.target.children) {
			  if (annoyingThings.indexOf(child.id) >= 0) {
					child.innerText = '';
					child.innerHTML = '';
				}
			}
		}
	});   
});

var config = { childList: true, subtree: true };

observer.observe(document, config);	