#include<iostream>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* resultado = new ListNode();
        ListNode* punteroRes = resultado;
        int carry = 0;

        while(l1 || l2){
            int sum = carry;
            if(l1){
                sum += l1->val;
                l1 = l1->next;
            }
            if(l2){
                sum += l2->val;
                l2 = l2->next;
            }
            carry = sum / 10;

            punteroRes->next = new ListNode(sum % 10);
            punteroRes = punteroRes->next;

        }

        if(carry){
            punteroRes->next = new ListNode(carry);
        }

        return resultado->next;
    }

};

void insertarNodo(ListNode*& cabeza, int valor) {
    if (!cabeza) {
        cabeza = new ListNode(valor);
        return;
    }
    ListNode* aux = cabeza;
    while (aux->next) {
        aux = aux->next;
    }
    aux->next = new ListNode(valor);
}

void mostrarLista(ListNode* cabeza) {
    while (cabeza) {
        cout << cabeza->val;
        if (cabeza->next) cout << " -> ";
        cabeza = cabeza->next;
    }
    cout << endl;
}

int main(){

    ListNode *l1 = nullptr;
    ListNode *l2 = nullptr;

    insertarNodo(l1,2);
    insertarNodo(l1,4);
    insertarNodo(l1,7);

    insertarNodo(l2,9);
    insertarNodo(l2,5);
    insertarNodo(l2,1);

    cout<<"Lista 1: "<<endl;
    mostrarLista(l1);

    cout<<"Lista 2: "<<endl;
    mostrarLista(l2);

    Solution sol;
    ListNode* resultado = sol.addTwoNumbers(l1, l2);

    cout << "Resultado: ";
    mostrarLista(resultado);

    return 0;
}