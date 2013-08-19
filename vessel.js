var vessel = new Vessel('������', [0,0], 1000);
var planetA = new Planet('�����', [0,0], 0);
var planetB = new Planet('�������', [100, 100], 5000);

// �������� �������� ���������
vessel.report(); // ������� "������". ��������������: 0,0. ������: 0 �� 1000�.
planetA.report(); // ������� "A". �������������: 0,0. ������ ���.
planetB.report(); // ������� "B". �������������: 100,100. �������� �����: 5000�.

vessel.flyTo(planetB);
planetB.loadCargoTo(vessel, 1000);
vessel.report(); // ������� "������". ��������������: 100,100. ������: 1000 �� 1000�.

vessel.flyTo(planetA);
planetA.unloadCargoFrom(vessel, 500);
vessel.report(); // ������� "������". ��������������: 0,0. ������: 500 �� 1000�.
planetA.report(); // ������� "A". ��������������: 0,0. �������� �����: 500�.
planetB.report(); // ������� "B". ��������������: 100,100. �������� �����: 4000�.