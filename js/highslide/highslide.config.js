hs.graphicsDir = 'js/highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.outlineType = 'rounded-white';
hs.fadeInOut = true;
hs.dimmingOpacity = 0.75;

// Add the controlbar
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		opacity: .75,
		position: 'bottom center',
		hideOnMouseOut: true
	}
});

// Russian language strings
hs.lang = {
	cssDirection: 'ltr',
	loadingText: '�����������...',
	loadingTitle: '������� ��� ������',
	focusTitle: '������� ����� ��������� �� �������� ����',
	fullExpandTitle: '���������� �� ������������� �������',
	creditsText: '',
	creditsTitle: '������� �� �������� �������� Highslide JS',
	previousText: '����������',
	nextText: '���������',
	moveText: '�����������',
	closeText: '�������',
	closeTitle: '������� (esc)',
	resizeTitle: '�������� ������',
	playText: '��������',
	playTitle: '������ �������� (������)',
	pauseText: '�����',
	pauseTitle: '������������� �������� (������)',
	previousTitle: '���������� (������� �����)',
	nextTitle: '��������� (������� ������)',
	moveTitle: '�����������',
	fullExpandText: '������������ ������',
	number: '����������� %1 �� %2',
	restoreTitle: '������� ����� ������� �����������, ������� � ���������� ��� ��������� ��������������. ��� ��������� ����������� ����������� �������.'
};