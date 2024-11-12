"use client";

import {
  Button,
  Input,
  Card,
  CardBody,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon, Upload, X } from "lucide-react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// Define types for our indicators
type Platform = "MT4" | "MT5" | "TradingView";
type Language = "MQL4" | "MQL5" | "PineScript";

interface Indicator {
  id: string;
  name: string;
  description: string;
  platform: Platform;
  language: Language;
  code: string;
  dateAdded: string;
}

// Add new type for form data
interface IndicatorFormData {
  name: string;
  description: string;
  platform: Platform;
  language: Language;
  code: string;
}

export default function IndicatorsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "all">(
    "all"
  );
  const [selectedLanguage, setSelectedLanguage] = useState<Language | "all">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Add new state for modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Separate Modal Component with its own state
  const UploadModal = () => {
    // Local state for the form
    const [localFormData, setLocalFormData] = useState<IndicatorFormData>({
      name: "",
      description: "",
      platform: "MT4",
      language: "MQL4",
      code: "",
    });

    const handleLocalSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Here you would typically send the data to your backend
      console.log("Submitting indicator:", localFormData);
      onClose();
      // Reset form
      setLocalFormData({
        name: "",
        description: "",
        platform: "MT4",
        language: "MQL4",
        code: "",
      });
    };

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        scrollBehavior="inside"
        classNames={{
          base: "bg-background",
          body: "py-6",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleLocalSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Upload New Indicator
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Indicator Name"
                    placeholder="Enter indicator name"
                    value={localFormData.name}
                    onChange={(e) =>
                      setLocalFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    isRequired
                    classNames={{
                      input: "bg-transparent",
                      inputWrapper: "bg-default-100/50",
                    }}
                  />

                  <Textarea
                    label="Description"
                    placeholder="Enter indicator description"
                    value={localFormData.description}
                    onChange={(e) =>
                      setLocalFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    isRequired
                    classNames={{
                      input: "bg-transparent",
                      inputWrapper: "bg-default-100/50",
                    }}
                  />

                  <div className="flex gap-4">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" className="bg-default-100/50">
                          Platform: {localFormData.platform}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        selectedKeys={[localFormData.platform]}
                        onSelectionChange={(keys) =>
                          setLocalFormData((prev) => ({
                            ...prev,
                            platform: Array.from(keys)[0] as Platform,
                          }))
                        }
                      >
                        <DropdownItem key="MT4">MetaTrader 4</DropdownItem>
                        <DropdownItem key="MT5">MetaTrader 5</DropdownItem>
                        <DropdownItem key="TradingView">
                          TradingView
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" className="bg-default-100/50">
                          Language: {localFormData.language}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        selectedKeys={[localFormData.language]}
                        onSelectionChange={(keys) =>
                          setLocalFormData((prev) => ({
                            ...prev,
                            language: Array.from(keys)[0] as Language,
                          }))
                        }
                      >
                        <DropdownItem key="MQL4">MQL4</DropdownItem>
                        <DropdownItem key="MQL5">MQL5</DropdownItem>
                        <DropdownItem key="PineScript">PineScript</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  <Textarea
                    label="Indicator Code"
                    placeholder="Paste your indicator code here"
                    value={localFormData.code}
                    onChange={(e) =>
                      setLocalFormData((prev) => ({
                        ...prev,
                        code: e.target.value,
                      }))
                    }
                    minRows={10}
                    isRequired
                    classNames={{
                      input: "font-mono bg-transparent",
                      inputWrapper: "bg-default-100/50",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Upload
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    );
  };

  // Extended mock data with various indicators
  const indicators: Indicator[] = [
    {
      id: "1",
      name: "Advanced RSI with MA",
      description:
        "Custom RSI indicator with Moving Average and dynamic overbought/oversold levels",
      platform: "MT4",
      language: "MQL4",
      code: "// Advanced RSI with MA implementation",
      dateAdded: "2024-03-20",
    },
    {
      id: "2",
      name: "Volume Profile",
      description:
        "Real-time volume profile with POC and value area calculations",
      platform: "TradingView",
      language: "PineScript",
      code: "// Volume Profile implementation",
      dateAdded: "2024-03-19",
    },
    {
      id: "3",
      name: "Smart Money Concepts",
      description: "Identifies institutional order blocks and liquidity levels",
      platform: "MT5",
      language: "MQL5",
      code: "// Smart Money Concepts implementation",
      dateAdded: "2024-03-18",
    },
    {
      id: "4",
      name: "Multi-Timeframe VWAP",
      description:
        "VWAP indicator with multiple timeframe analysis and standard deviations",
      platform: "TradingView",
      language: "PineScript",
      code: "// MTF VWAP implementation",
      dateAdded: "2024-03-17",
    },
    {
      id: "5",
      name: "Supply Demand Zones",
      description:
        "Automatically identifies and plots supply and demand zones with strength ratings",
      platform: "MT5",
      language: "MQL5",
      code: "// Supply Demand Zones implementation",
      dateAdded: "2024-03-16",
    },
    {
      id: "6",
      name: "Harmonic Pattern Scanner",
      description:
        "Detects and validates harmonic patterns with risk/reward calculations",
      platform: "MT4",
      language: "MQL4",
      code: "// Harmonic Pattern Scanner implementation",
      dateAdded: "2024-03-15",
    },
    {
      id: "7",
      name: "Advanced Order Flow",
      description:
        "Real-time order flow analysis with delta and cumulative volume delta",
      platform: "MT5",
      language: "MQL5",
      code: "// Order Flow implementation",
      dateAdded: "2024-03-14",
    },
    {
      id: "8",
      name: "Supertrend Strategy",
      description:
        "Enhanced Supertrend indicator with multiple confirmation signals",
      platform: "TradingView",
      language: "PineScript",
      code: "// Supertrend Strategy implementation",
      dateAdded: "2024-03-13",
    },
    {
      id: "9",
      name: "Fibonacci Cluster",
      description: "Multi-timeframe Fibonacci analysis with confluence zones",
      platform: "MT4",
      language: "MQL4",
      code: "// Fibonacci Cluster implementation",
      dateAdded: "2024-03-12",
    },
  ];

  // Replace the existing filtering logic
  const getFilteredIndicators = () => {
    return indicators.filter((indicator) => {
      // Check platform filter
      if (
        selectedPlatform !== "all" &&
        indicator.platform !== selectedPlatform
      ) {
        return false;
      }

      // Check language filter
      if (
        selectedLanguage !== "all" &&
        indicator.language !== selectedLanguage
      ) {
        return false;
      }

      // Check search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          indicator.name.toLowerCase().includes(query) ||
          indicator.description.toLowerCase().includes(query)
        );
      }

      return true;
    });
  };

  const filteredIndicators = getFilteredIndicators();

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Indicator Library</h1>
          <Button
            onPress={onOpen}
            color="primary"
            endContent={<Upload className="w-4 h-4" />}
            className="mb-4"
          >
            Upload Indicator
          </Button>
        </div>
        <p className="text-default-500">
          Browse, filter, and copy trading indicators for different platforms
        </p>
      </div>

      {/* Upload Modal */}
      <UploadModal />

      {/* Search and Filter Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
        <Input
          className="max-w-xs"
          placeholder="Search indicators..."
          startContent={<SearchIcon className="w-4 h-4 text-default-400" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat">Platform: {selectedPlatform}</Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="single"
              selectedKeys={new Set([selectedPlatform])}
              onSelectionChange={(keys) => {
                const selected = Array.from(keys)[0] as Platform | "all";
                setSelectedPlatform(selected);
              }}
            >
              <DropdownItem key="all">All Platforms</DropdownItem>
              <DropdownItem key="MT4">MetaTrader 4</DropdownItem>
              <DropdownItem key="MT5">MetaTrader 5</DropdownItem>
              <DropdownItem key="TradingView">TradingView</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat">Language: {selectedLanguage}</Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="single"
              selectedKeys={new Set([selectedLanguage])}
              onSelectionChange={(keys) => {
                const selected = Array.from(keys)[0] as Language | "all";
                setSelectedLanguage(selected);
              }}
            >
              <DropdownItem key="all">All Languages</DropdownItem>
              <DropdownItem key="MQL4">MQL4</DropdownItem>
              <DropdownItem key="MQL5">MQL5</DropdownItem>
              <DropdownItem key="PineScript">PineScript</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {/* Replace the existing Indicators Grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIndicators.length === 0 ? (
          <div className="col-span-full">
            <Card className="w-full p-8 text-center">
              <CardBody>
                <p className="text-default-500">
                  No indicators found. Try adjusting your filters.
                </p>
              </CardBody>
            </Card>
          </div>
        ) : (
          filteredIndicators.map((indicator) => (
            <Card
              key={indicator.id}
              className="hover:scale-105 transition-transform"
            >
              <CardBody>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{indicator.name}</h3>
                    <Chip
                      size="sm"
                      variant="flat"
                      color={
                        indicator.platform === "MT4"
                          ? "primary"
                          : indicator.platform === "MT5"
                            ? "secondary"
                            : "success"
                      }
                    >
                      {indicator.platform}
                    </Chip>
                  </div>

                  <p className="text-default-500">{indicator.description}</p>

                  <div className="flex justify-between items-center">
                    <Chip size="sm" variant="flat">
                      {indicator.language}
                    </Chip>
                    <Button
                      size="sm"
                      color="primary"
                      onClick={() => {
                        // Implement code copying logic
                        navigator.clipboard.writeText(indicator.code);
                      }}
                    >
                      Copy Code
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
