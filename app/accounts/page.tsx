'use client';

import { Button, Card, CardBody, CardHeader, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@nextui-org/react";
import { Plus, Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, BarChart3, RefreshCcw } from "lucide-react";
import { useState } from "react";

// Types
type AccountType = 'Live' | 'Demo';
type Broker = 'MetaTrader 4' | 'MetaTrader 5' | 'cTrader';
type Currency = 'USD' | 'EUR' | 'GBP';

interface TradingAccount {
  id: string;
  accountNumber: string;
  broker: Broker;
  type: AccountType;
  balance: number;
  equity: number;
  currency: Currency;
  profit: number;
  lastUpdated: string;
}

export default function AccountsPage() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [accounts, setAccounts] = useState<TradingAccount[]>([
    {
      id: '1',
      accountNumber: '12345678',
      broker: 'MetaTrader 4',
      type: 'Live',
      balance: 10000.00,
      equity: 10250.00,
      currency: 'USD',
      profit: 250.00,
      lastUpdated: '2024-03-20T10:30:00Z'
    },
    {
      id: '2',
      accountNumber: '87654321',
      broker: 'MetaTrader 5',
      type: 'Demo',
      balance: 50000.00,
      equity: 49800.00,
      currency: 'EUR',
      profit: -200.00,
      lastUpdated: '2024-03-20T10:30:00Z'
    },
    // Add more sample accounts as needed
  ]);

  const totalEquity = accounts.reduce((sum, account) => sum + account.equity, 0);
  const totalProfit = accounts.reduce((sum, account) => sum + account.profit, 0);

  const AccountModal = () => {
    const [localFormData, setLocalFormData] = useState({
      accountNumber: '',
      broker: 'MetaTrader 4' as Broker,
      type: 'Live' as AccountType,
      currency: 'USD' as Currency,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('New account:', localFormData);
      onClose();
    };

    return (
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="lg"
        classNames={{
          base: "bg-background",
          body: "py-6",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader>Add Trading Account</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Account Number"
                    placeholder="Enter account number"
                    value={localFormData.accountNumber}
                    onChange={(e) => setLocalFormData(prev => ({
                      ...prev,
                      accountNumber: e.target.value
                    }))}
                    isRequired
                    classNames={{
                      input: "bg-transparent",
                      inputWrapper: "bg-default-100/50"
                    }}
                  />

                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="flat" className="bg-default-100/50">
                        Broker: {localFormData.broker}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      selectedKeys={[localFormData.broker]}
                      onSelectionChange={(keys) => setLocalFormData(prev => ({
                        ...prev,
                        broker: Array.from(keys)[0] as Broker
                      }))}
                    >
                      <DropdownItem key="MetaTrader 4">MetaTrader 4</DropdownItem>
                      <DropdownItem key="MetaTrader 5">MetaTrader 5</DropdownItem>
                      <DropdownItem key="cTrader">cTrader</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <div className="flex gap-4">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" className="bg-default-100/50">
                          Type: {localFormData.type}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        selectedKeys={[localFormData.type]}
                        onSelectionChange={(keys) => setLocalFormData(prev => ({
                          ...prev,
                          type: Array.from(keys)[0] as AccountType
                        }))}
                      >
                        <DropdownItem key="Live">Live</DropdownItem>
                        <DropdownItem key="Demo">Demo</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" className="bg-default-100/50">
                          Currency: {localFormData.currency}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        selectedKeys={[localFormData.currency]}
                        onSelectionChange={(keys) => setLocalFormData(prev => ({
                          ...prev,
                          currency: Array.from(keys)[0] as Currency
                        }))}
                      >
                        <DropdownItem key="USD">USD</DropdownItem>
                        <DropdownItem key="EUR">EUR</DropdownItem>
                        <DropdownItem key="GBP">GBP</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Add Account
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Trading Accounts</h1>
          <Button 
            onPress={onOpen}
            color="primary"
            endContent={<Plus className="w-4 h-4" />}
          >
            Add Account
          </Button>
        </div>
        <p className="text-default-500">
          Manage your trading accounts and monitor performance
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-default-50">
          <CardBody className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-default-500">Total Accounts</p>
              <p className="text-2xl font-semibold">{accounts.length}</p>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-default-50">
          <CardBody className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-default-500">Total Equity</p>
              <p className="text-2xl font-semibold">${totalEquity.toLocaleString()}</p>
            </div>
          </CardBody>
        </Card>

        <Card className={`bg-default-50`}>
          <CardBody className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-default-500">Total Profit</p>
              <p className="text-2xl font-semibold">${totalProfit.toLocaleString()}</p>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-default-50">
          <CardBody className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <RefreshCcw className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-default-500">Last Updated</p>
              <p className="text-2xl font-semibold">2024-03-20T10:30:00Z</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
} 