#include <iostream>
#include <string>
using namespace std;
int main(){
	string name;
	cout<<"enter name: ";
	cin>>name;
	cout<<"Student name:"<<name<<endl;
	int marks;
	string grade;
    int total =0;
	for(int i=0 ; i<5 ; i++){
		while(true){
		cout<<"Enter marks for subject"<<i+1<<":";
        cin>>marks;
            if(cin.fail()){
                cin.clear();
                cin.ignore(1000,'\n');
                cout<<"Invalid input!Please enter numbers only."<<endl;
            }
            else if(marks< 0||marks>100){
                cout<<"Invalid marks!Please enter marks between 0 and 100."<<endl;
            }
            else{
                break;
            }
        }

		total =total+marks;
	}
	cout<<"total marks:"<<total<<endl;
	float percentage=(total/500.0)*100;
	cout<<"%age:"<<percentage<<endl;
	if (percentage>=90){
		grade="A+";
	}
	else if (percentage>=80){
		grade="A";
	}
	else if (percentage>=70){
		grade="B+";
	}
	else if (percentage>=60){
		grade="B";
	}
	else if (percentage>=50){
		grade="C";
	}
	else{
		grade="F";
	}
	cout<<"grade ="<<grade<<endl;
    if(percentage>=40){
    	cout<<"Pass"<<endl;
	}
	else
	cout<<"Fail"<<endl;
    return 0;
}