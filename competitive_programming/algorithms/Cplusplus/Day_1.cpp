#include <iostream>
#include <cstdio>
using namespace std;

int main() {
	// int num;
	// cin >> num;    //Reading input from STDIN
	// cout << "Input number is " << num << endl;	// Writing output to STDOUT
	string str;
	cin >> str;
	int count_0 = 0;
	int count_1 = 0;
	int count_2 = 0;
	int count_3 = 0;
	int count_4 = 0;
	int count_5 = 0;
	int count_6 = 0;
	int count_7 = 0;
	int count_8 = 0;
	int count_9 = 0;
	int arr[] = {0,1,2,3,4,5,6,7,8,9};

	int len = str.length();

	for(int i = 0; i < len; i++){
		// for(int j = 0; j < 10; j++){
		// 	if(str[i] == arr[j]){
		// 		count++;
		// 	}
		// }
		if(str[i] == '1'){
			count_1++;
		}else if(str[i] == '2'){
			count_2++;
		}else if(str[i] == '3'){
			count_3++;
		}else if(str[i] == '4'){
			count_4++;
		}else if(str[i] == '5'){
			count_5++;
		}else if(str[i] == '6'){
			count_6++;
		}else if(str[i] == '7'){
			count_7++;
		}else if(str[i] == '8'){
			count_8++;
		}else if(str[i] == '9'){
			count_9++;
		}else if(str[i] == '0'){
			count_0++;
		}
	}

	cout << "0 " << count_0 << endl;
	cout << "1 " << count_1 << endl;
	cout << "2 " << count_2 << endl;
	cout << "3 " << count_3 << endl;
	cout << "4 " << count_4 << endl;
	cout << "5 " << count_5 << endl;
	cout << "6 " << count_6 << endl;
	cout << "7 " << count_7 << endl;
	cout << "8 " << count_8 << endl;
	cout << "9 " << count_9 << endl;
}