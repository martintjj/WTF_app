(function(){
        var userAgent = window.navigator.userAgent;
	var currentSection = null;
	var initResult;
	//var setOCE = false;
	
	// Auxiliares
	
	var isNumber = function (n) {return !isNaN(parseFloat(n)) && isFinite(n);}
	
	
	var loadConnectionError = function(){
		unloadLoader();
		
		loadPopUp(connectionErrorTemplate);
	};
	
	var loadLoader = function(){
		loadShade();
		
		$('#loader-container').remove();
		
		$('body').append(loaderTemplate);
		
		setTimeout(function() {
			$('#loader-container').addClass('loader-container-show');
		}, 100);

		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
			hideAddressbar('#shade');
		}

	};
	
	var unloadLoader = function(){
		$('#loader-container').addClass('loader-container-hide');
		
		unloadShade();
	};

	var loadShade = function(){
		$('body').append('<div id="shade"></div>');
		
		//$('#shade').width($(window).width());
		//$('#shade').height($(window).height());
		
		$('#shade').fadeIn(300);
	};
	
	var unloadShade = function(){
		//nmgrilo: remove fadeOut
		//$('#shade').fadeOut(300, function(){
			$('#shade').remove();
			$('#loader-container').remove();
			$('#popup-container').remove();
		//});
	};
	
	var loadPopUp = function(content){
		//loadShade();
		
		//$('#popup-container').remove();
		
		//$('body').append(popupTemplate.replace('CONTENT', content));
		
		setTimeout(function() {
			loadShade();

			if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
				hideAddressbar('#shade');
			}
		
			$('#popup-container').remove();
		
			$('body').append(popupTemplate.replace('CONTENT', content));
			$('#popup-container').addClass('popup-container-show');
			$('#popup-container').show();
			$('#popup-container').click(function() {
			 	unloadPopUp();
			});
		}, 500);
	};
	
	var unloadPopUp = function(){
		$('#apps-list').show();
		$('#popup-container').addClass('popup-container-hide');
		
		unloadShade();
		$('#popup-container').remove();
	};
	
	// Controlo de formulário	
	var loadSection = function(section, content){
		var obj = sections[section];
		
		$('#xpto-error').remove();
		//if(currentSection != section)
			$('#xpto-' + section).remove();
		
		if(content)
			$('#wrapper').append(content);
		else $('#wrapper').append(obj.template);
		
		$('.clickable-button', $('#xpto-' + section)).on('click', function(){
			$(this).removeClass('button-clickable').addClass('button-clicked');
		});
		
		setTimeout(function(){
			var counter = 0;
			
			$('#xpto-' + section).addClass('section-container-show');
			
			$('#background').css('left', '-' + (obj.index * 120 + 10) + '%');
			
			$('#error').hide();
			
			$('.move', $('#xpto-' + section)).each(function(){
				counter++;
				$(this).addClass('moved');
				$(this).addClass('moved' + counter);
			});
		
			if(currentSection != null && currentSection != section){
				unloadSection(currentSection);
			}
		
			currentSection = section;
			
		}, 500);
	};
	
	var unloadSection = function(section){
		$('.move', $('#xpto-' + section)).addClass('removed');
		$('#xpto-' + section).addClass('section-container-hide');
		//setTimeout(function(){$('#xpto-' + currentSection).remove();},500);
	};
	
	var loadFormError = function(message, showInfo, errorContinue, continueContinueText){
		var content = error;
		content = content.replace('ERROR_MESSAGE', message);
		content = content.replace('ERROR_BUTTON_DISPLAY', (errorContinue!='') ? 'block' : 'none');
		content = content.replace('ERROR_BUTTON_FUNC', errorContinue);
		content = content.replace('ERROR_BUTTON_TEXT', continueContinueText);
		content = content.replace('ERROR_INFO_DISPLAY', (showInfo) ? 'block' : 'none');

		loadError(content);
	};
	
	var loadRateplanError = function(message){
		var content = error;
		content = content.replace('ERROR_MESSAGE', message);
		content = content.replace('ERROR_BUTTON_FUNC', 'showApps');
		content = content.replace('ERROR_BUTTON_TEXT', 'ver aplica&ccedil;&otilde;es');
		content = content.replace('ERROR_INFO_DISPLAY', 'none');
		
		loadError(content);
	};
	
	var loadError = function(content){ 
		$('#error').append(content).show();
		hideAddressbar('#error');
		$('.clickable-button', $('#error')).on('click', function(){
			$(this).removeClass('button-clickable').addClass('button-clicked');
		});
		
		setTimeout(function(){
			var counter = 0;
			
			$('#error_background').css('left', '-10%');
			
			$('.move', $('#xpto-error')).each(function(){
				counter++;
				$(this).addClass('moved');
				$(this).addClass('moved' + counter);
			});
		}, 500);
	}
	
	var validateForm = function(){

		//var bicc = $('#cc-bi').val();
		var bi = $('#cc-bi').val();
		
		for(var i = bi.length; i < 8; i++){
				bi = '0' + bi;
		}
		
		var cbi = $('#cc-bi-ck').val();
		var bicc = bi + cbi;
		$('#error-message').html('');
		
		if(!isNumber(bicc)){
		    $('#error-message').html('Oops, tem que ser um número!');
			
			setTimeout(function(){
				//$('#send-button').addClass('button-clickable').removeClass('button-clicked');
			}, 500);
			return;
		}else if(bicc.length < 9){
			$('#error-message').html('Oops, o número tem de ter 9 dígitos!');
			
			setTimeout(function(){
				//$('#send-button').addClass('button-clickable').removeClass('button-clicked');
			}, 500);
			return;
		}
		
		// TODO timeout para mostrar o botão a sair
		setTimeout(function() {
			loadLoader();
			
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: 'request.aspx',
				//url: 'requests/Registry.json',
				data: {operation: 'Registry', value: bicc},
				success: function(result){
					var error = '';
					
					setTimeout(function(){
						unloadLoader();
						
						if(result.success){
							loadRateplan(initResult);
							$('.clickable-button-form').addClass('button-clicked');
							return;
						}else{
							if(result.sessionStart){
								loadSection('welcome');
							}else if(result.wifi){
								//$('#send-button').removeClass('button-clicked').addClass('button-clickable');
								loadPopUp(wifiTemplate);
							}else if(result.invalid){
								switch(result.triesLeft){
								case 0: loadFormError(errorTriesLimit, false,(result.continueWizard) ? 'errorRegistryContinue' : '','escolher tarif&aacute;rio'); break;
								case 1: $('#error-message').html('O teu BI ou CC &eacute; inv&aacute;lido, tens mais 1 tentativa'); break;
								default: $('#error-message').html('O teu BI ou CC &eacute; inv&aacute;lido, tens mais ' + result.triesLeft + ' tentativas'); break;
								}
								//$('#send-button').removeClass('button-clicked').addClass('button-clickable');
							}else if(result.errorTriesLimit){
								loadFormError(errorTriesLimit, false,(result.continueWizard) ? 'errorRegistryContinue' : '','escolher tarif&aacute;rio');
							}else if(result.errorDuplicateBicc){
								loadFormError(errorDuplicateBICC, false,(result.continueWizard) ? 'errorRegistryContinue' : '','escolher tarif&aacute;rio');
							}else if(result.errorAgeCheck){
								loadFormError(errorOverAge, false,(result.continueWizard) ? 'errorRegistryContinue' : '','escolher tarif&aacute;rio');
							}else if(result.errorInvalidOffer){
								loadFormError(errorInvalidOffer,false,(result.continueWizard) ? 'errorRegistryContinue' : '','escolher tarif&aacute;rio');
							}

						}
					}, 3000);
				},
				error: loadConnectionError
			});
		}, 500);
	};
	
	var loadRateplan = function(obj){
		var content = rateplan;
		var rateplans = '';
		
		var text = 'Escolhe o melhor tarif&aacute;rio para ti';
		
		if(obj.showCurrentRatePlan){
			if(obj.currentRateplan != null){
				if(obj.currentRateplanId != null)
					text = 'O teu tarif&aacute;rio atual &eacute; o ' + obj.currentRateplan + 
							'. Queres alterar?.';
				else text = 'O teu tarif&aacute;rio atual &eacute; ' + obj.currentRateplan + 
							'. Escolhe o tarif&aacute;rio que pretendes.';
			}
		}	
		 else{
		 	text = 'Escolhe o tarif&aacute;rio que pretendes.';
		 }
		
		content = content.replace('RATEPLAN_TEXT', text);
		
		text = 'Mesadas WTF';
		content = content.replace('RATEPLAN_TEXT_MONTHLY', text);
		
		var count = 1;
		for(var i = 0; obj.rateplans != null && i < obj.rateplans.length; i++){
			var plan = obj.rateplans[i];
			
			if((obj.currentRatePlanId != null && 
					obj.currentRatePlanId == plan.id) || plan.isMonthly == 0)
				continue;
			
			var planTemplate = rateplanTemplate;
			planTemplate = planTemplate.replace('RATEPLAN_ID', plan.id)
							.replace('RATEPLAN_COUNT', count)
							.replace('RATEPLAN_COUNT', count)
							.replace('RATEPLAN_NAME', plan.name)
							.replace('RATEPLAN_ICON', plan.icon)
							.replace('RATEPLAN_NET', plan.net)
							.replace('RATEPLAN_CREDITS', plan.credits)
							.replace('RATEPLAN_EURO', plan.price.split('.')[0])
							.replace('RATEPLAN_CENTS', plan.price.split('.')[1]);
			
			count++;
			
			rateplans = rateplans + planTemplate;
		}
		
		content = content.replace('RATEPLANS_MONTHLY', rateplans);
		
		rateplans = null;
		
		text = 'Semanadas WTF';
		content = content.replace('RATEPLAN_TEXT_WEEKLY', text);
		
		count = 4;
		for(var i = 0; obj.rateplans != null && i < obj.rateplans.length; i++){
			var plan = obj.rateplans[i];
			
			if((obj.currentRatePlanId != null && 
					obj.currentRatePlanId == plan.id) || plan.isMonthly == 1)
				continue;
			
			var planTemplate = rateplanTemplate;
			planTemplate = planTemplate.replace('RATEPLAN_ID', plan.id)
							.replace('RATEPLAN_COUNT', count)
							.replace('RATEPLAN_COUNT', count)
							.replace('RATEPLAN_NAME', plan.name)
							.replace('RATEPLAN_ICON', plan.icon)
							.replace('RATEPLAN_NET', plan.net)
							.replace('RATEPLAN_CREDITS', plan.credits)
							.replace('RATEPLAN_EURO', plan.price.split('.')[0])
							.replace('RATEPLAN_CENTS', plan.price.split('.')[1]);
			
			count++;
			
			rateplans = rateplans + planTemplate;
		}
		
		content = content.replace('RATEPLANS_WEEKLY', rateplans);
		
		loadSection('rateplan', content);
	};
	
	var pickRateplan = function(id, pos){
		
		/* Timeout com a mesma duração 
		 * da transição que faz 
		 * desaparecer o botão de tarifário
		 * de modo a apenas carregar o loader
		 * após a animação estar completa 
		 */
		
		var picked = 'rateplan' + pos;
		
		$('.rateplan-container').each(function(){
			var id = $(this).attr('id');

			if(id != picked){
				$(this).addClass('button-clicked');
			}
		});
		
		setTimeout(function() {
			loadLoader();
			
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: 'request.aspx',
				//url: 'requests/Rateplan.json',
				data: {operation: 'RatePlan', value: id},
				success: function(result){
					setTimeout(function(){
						unloadLoader();
					
						if(result.success){
							loadSuccess(result);
						} else if(result.sessionStart){
							loadSection('welcome'); 
						} else if(result.wifi){
							loadPopUp(wifiTemplate);
						} else if(result.overage){
							loadFormError(errorOverAge2,false,'apps','ver aplica&ccedil;&otilde;es');
						} else if(result.pendingChange){
							loadSuccess(result);							
						} else if(result.refusedChange){
							loadFormError(errorProcessing,false,'refusedPlanChange','voltar a escolher');
						} else if(result.waitProcessing){
							loadFormError(errorWaitProcessing,false,'apps','ver aplica&ccedil;&otilde;es');
						}
					},3000);
				},
				error: loadConnectionError
			});
		}, 500);
	};
	
	var loadSuccess = function(result){
		var content = success;
		var title = '';
		  
		var text = '';

		if(result.pendingChange){
			title = '';
			
			var ratePlanCode;
			if (typeof(result.ratePlanCode) !== 'undefined')
			{
				ratePlanCode = result.ratePlanCode;
			}
			if (typeof(result.currentRatePlanCode) !== 'undefined')
			{
				ratePlanCode = result.currentRatePlanCode;
			}
			;
			if (typeof(window['errorPending' + ratePlanCode]) !== 'undefined')
			{
				errorPending = window['errorPending' + ratePlanCode];
			}
			
			
			if(result.rateplanPrice=='0'){
				text=errorPending.replace('RATEPLANPRICE','');
			}else{
				text=errorPending.replace('RATEPLANPRICE',result.rateplanPrice+'€');
			}			
			content = content.replace('SUCCESS_TITLE_CLASS', 'title2');
			content = content.replace('SUCCESS_TEXT_CLASS', 'instructions2');
		} else if(result.currentRateplanIsPending) {
			title = '';
			if(result.currentRateplanPrice=='0'){
				text=errorPending.replace('RATEPLANPRICE','');
			}else{
				text=errorPending.replace('RATEPLANPRICE',result.currentRateplanPrice+'€');
			}			
			content = content.replace('SUCCESS_TITLE_CLASS', 'title2');
			content = content.replace('SUCCESS_TEXT_CLASS', 'instructions2');
		} else {			 
			text = 'A ativa&ccedil;&atilde;o terminou com sucesso, aguarda uma mensagem de confirma&ccedil;&atilde;o. Entretanto podes ir instalando as tuas APPs Favoritas.';
			content = content.replace('SUCCESS_TITLE_CLASS', 'title');
			content = content.replace('SUCCESS_TEXT_CLASS', 'instructions');
		}
		
		
		content = content.replace('SUCCESS_TITLE', title);
		content = content.replace('SUCCESS_TEXT', text);
		
		loadSection('success', content);
	};
	
	var ValidateUser = function(){
		setTimeout(function() {
			loadLoader();
			
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: 'request.aspx',
				//url: 'requests/Validation.json',
				data: {operation: 'Validation'},
				success: function(result){
				
					setTimeout(function(){
						unloadLoader();
						initResult=result;
						
						if(result.success){
							if(result.currentRateplanIsPerfectStorm){
								loadApps(initResult);
							} else {
								if(!result.inDocId){
									loadSection('form');
									$('#cc-bi').keyup(function() {
										var value = $(this).val();											
										// Let's say it's a four digit pin number
										// Value starts at zero
										if(value.length >= 8) {
											$('#cc-bi-ck').focus();
										}
									});
								} else if(result.inPerfectStormOffer || result.inAgeValidationOffer){
									loadRateplan(initResult);
								}
							}
						} else {
							if(result.wifi){
								$('#next-button').addClass('button-clickable').removeClass('button-clicked');
								loadPopUp(wifiTemplate);
							}else if(result.currentRateplanIsPending){
								loadSuccess(result);
							}else if(result.rateplans == null || result.rateplans.length == 0){
								loadFormError(errorNoRatePlan,false,'apps','ver aplica&ccedil;&otilde;es');
							}else if(result.inDocId && !result.inPerfectStormOffer && !result.inAgeValidationOffer){
								loadFormError(errorOtherOffer,false, (result.continueWizard) ? 'errorOtherOfferContinue' : '','escolher tarif&aacute;rio');
							}
						}
						if(!result.wifi){
							$("#YT").attr("src","");
							$('#YT').remove();
						}
					},3000);
				},
				error: loadConnectionError
			});
		}, 500);
	};
	
	var loadApps = function(obj){
		var content = apps;
		var appslist = '';
		
		if (obj.appslist == null || obj.appslist.length==0)
			appslist = noAppsTemplate;
		else {
			for(var i = 0; i < obj.appslist.length; i++){
				var app = obj.appslist[i];
			
				var appTemplate = appsTemplate;
			
				appTemplate = appTemplate.replace('APP_ICON', app.icon)
					.replace('APP_NAME', app.name)
					.replace('APP_DESC', app.desc)
					.replace('APP_DLINK', app.dlink);
			
				appslist = appslist + appTemplate;
			}
		}
		
		content = content.replace('APPSLIST_CONTENT',appslist);
	
		loadSection('apps',content);
		touchScroll('apps-list-scroller');
	};
	
	var XPTO = {
		init: function(){
			loadSection('welcome');
		},
		form: function(){
			var frm = document.getElementById('WebForm1') || null;
			if(frm) {
				frm.action = 'javascript:validateForm()';
				frm.setAttribute("onSubmit", "");
			}
			ValidateUser();
			//loadSection('form');
		},
		bicc: function(){
			loadPopUp(biccTemplate);
		},
		ageInfo: function(){
			loadPopUp(ageInfoTemplate);
		},
		closePopUp: function(){
			unloadPopUp();
		},
		submitForm: function(){
			validateForm();
		},
		submitAge: function(){
			validateAge();
		},
		appsList: function(){
			loadPopUp(appListTemplate);
		},
		pickRateplan: function(id, pos){
			pickRateplan(id, pos);
		},
		apps: function(){
			loadApps(initResult);
		},
		appsWarning: function(){
			//$('#apps-list').hide();
			loadPopUp(appInfoTemplate);
		},
		errorWiFiContinue: function(){
			loadSection('welcome');
		},
		errorProcessingContinue: function(){
			//setOCE = false;
			loadRateplan(initResult);
		},
		errorOtherOfferContinue: function(){
			//setOCE = false;
			loadRateplan(initResult);
		},
		errorRegistryContinue: function(){
			//setOCE = false;
			loadRateplan(initResult);
		},
		refusedPlanChange: function(){
			loadRateplan(initResult);
		}
	}
	
	window.XPTO = XPTO;
})();