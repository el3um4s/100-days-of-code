"use strict";

(function () {
	
	function Start()
	{
		window.cr_createRuntime({
			exportType: "scirra-arcade"
		});
	};
	
	if (document.readyState === "loading")
		document.addEventListener("DOMContentLoaded", Start);
	else
		Start();
	
})();